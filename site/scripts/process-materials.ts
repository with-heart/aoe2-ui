import { PUBLIC_URL } from '@/constants'
import { writeAppMaterials } from '@/fs'
import type { Materials } from '@/types'
import { readdir, rm } from 'fs/promises'
import sizeOf from 'image-size'
import path from 'path'
import { Widget, materials, panels } from 'widgetui'

run()

async function run() {
  console.group('Getting materials referenced by game panels...')
  const referencedMaterials = await getReferencedMaterials()
  console.log(`Found ${referencedMaterials.length} referenced materials`)
  console.groupEnd()

  console.group('Flattening materials...')
  const appMaterials = await flattenMaterials(referencedMaterials)
  console.log(
    `Flattened ${Object.keys(appMaterials).length} materials to app format (${
      Object.values(appMaterials).filter((m) => m.type === 'color').length
    } colors, ${
      Object.values(appMaterials).filter((m) => m.type === 'texture').length
    } textures)`,
  )
  console.groupEnd()

  console.group('Writing app/materials.json...')
  await writeAppMaterials(appMaterials)
  console.log(`Wrote ${Object.keys(appMaterials).length} materials`)
  console.groupEnd()

  console.group('Deleting unused textures...')
  await deleteUnusedTextures(appMaterials)
  console.groupEnd()
}

async function getReferencedMaterials() {
  const refs = new Set<string>()

  for (const panel of panels) {
    for (const widget of panel.Collection.Widgets) {
      visitWidget(widget.Widget)
    }
  }

  return Array.from(refs)

  function visitWidget(widget: Widget) {
    if (widget.StateMaterials) {
      for (const [key, material] of Object.entries(widget.StateMaterials)) {
        if (typeof material === 'number') {
          continue
        }

        switch (material.Material) {
          // expand "CivEmblem" material to include all civilization emblems
          case 'CivEmblem': {
            const civEmblems = materials.Materials.filter((m) =>
              m.MaterialDef.Name.startsWith('CivEmblem'),
            ).map((m) => m.MaterialDef.Name)

            for (const emblem of civEmblems) {
              refs.add(emblem)
            }

            break
          }
          // report "None" materials
          case 'None': {
            warn(`Widget ${widget.Name} has "None" material for state "${key}"`)
            break
          }
          default: {
            if (material.Material) {
              refs.add(material.Material)
            }
          }
        }
      }
    }

    if (widget.ChildWidgets) {
      for (const child of widget.ChildWidgets) {
        visitWidget(child.Widget)
      }
    }
  }
}

async function flattenMaterials(referencedMaterials: string[]) {
  const appMaterials: Materials = {}

  for (const ref of referencedMaterials) {
    const materialDef = materials.Materials.find(
      (m) => m.MaterialDef.Name === ref,
    )?.MaterialDef

    if (!materialDef) {
      warn(`MaterialDef not found for ${ref}`)
      continue
    }

    const { Name, Type } = materialDef

    switch (Type) {
      case 'Atlas': {
        const atlasDef = materials.AtlasTextures.find(
          (a) => a.AtlasDef.Name === materialDef.AtlasRef,
        )?.AtlasDef
        if (!atlasDef) {
          warn(`AtlasDef not found for ${materialDef.AtlasRef} (${Name})`)
          continue
        }

        const texture = atlasDef.Textures.find(
          (t) => t.RefName === materialDef.TextureRef,
        )
        if (!texture) {
          warn(
            `Texture ${materialDef.TextureRef} not found in atlas ${materialDef.AtlasRef} (${Name})`,
          )
          continue
        }

        const { width, height } = sizeOf(
          path.join(PUBLIC_URL.pathname, texture.FileName),
        )

        if (!width || !height) {
          warn(`Failed to get dimensions for ${texture.FileName} (${Name})`)
          continue
        }

        appMaterials[Name] = {
          type: 'texture',
          filename: texture.FileName,
          width,
          height,
        }

        break
      }
      case 'Color': {
        let hex = toHex(materialDef.Color)
        if (Name === 'FlatColor') {
          // if the color is FlatColor, remove the alpha channel
          hex = hex.slice(0, hex.length - 2)
        }

        appMaterials[Name] = {
          type: 'color',
          color: hex,
        }
        break
      }
    }
  }

  return appMaterials
}

function toHex({
  r,
  g,
  b,
  a,
}: {
  r: number
  g: number
  b: number
  a?: number
}) {
  return `#${numToHex(r)}${numToHex(g)}${numToHex(b)}${a ? numToHex(a) : ''}`

  function numToHex(num: number) {
    return ((num * 255) | (1 << 8)).toString(16).slice(1)
  }
}

async function deleteUnusedTextures(materials: Materials) {
  const textureFilenames = Array.from(
    Object.values(materials).reduce((acc, cur) => {
      if (cur.type === 'texture') {
        acc.add(cur.filename)
      }
      return acc
    }, new Set<string>()),
  )

  const { files, dirs } = await getTextureFilesAndDirectoriesLists()

  const unusedFiles = files.filter(
    (f) =>
      !textureFilenames.includes(f) &&
      f !== 'textures/ingame/staticons/reloadTime.png',
  )
  await Promise.all(
    unusedFiles.map(async (f) => rm(path.join(PUBLIC_URL.pathname, f))),
  )
  console.log(
    `Deleted ${unusedFiles.length} unused texture files, ${
      files.length - unusedFiles.length
    } remaining`,
  )

  const unusedDirs = dirs.filter(
    (d) => !textureFilenames.some((f) => f.startsWith(d)),
  )
  await Promise.all(
    unusedDirs.map(async (d) =>
      rm(path.join(PUBLIC_URL.pathname, d), { recursive: true, force: true }),
    ),
  )
  console.log(
    `Deleted ${unusedDirs.length} unused texture directories, ${
      dirs.length - unusedDirs.length
    } remaining`,
  )
}

async function getTextureFilesAndDirectoriesLists(): Promise<{
  dirs: string[]
  files: string[]
}> {
  const dirents = await readdir(PUBLIC_URL.pathname, {
    encoding: 'utf-8',
    recursive: true,
    withFileTypes: true,
  })

  const dirs = dirents
    .filter((dirent) => dirent.isDirectory())
    .map((d) => path.relative(PUBLIC_URL.pathname, path.join(d.path, d.name)))
  const files = dirents
    .filter((dirent) => dirent.isFile())
    .map((f) => path.relative(PUBLIC_URL.pathname, path.join(f.path, f.name)))
    .filter((f) => f.startsWith('textures/') && !f.endsWith('.DS_Store'))

  return { dirs, files }
}

function warn(message: string) {
  console.warn(`⚠️ ${message}`)
}
