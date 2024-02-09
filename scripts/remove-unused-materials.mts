import { PUBLIC_URL } from '@/constants'
import { loadGameMaterials, loadGamePanels, writeAppMaterials } from '@/fs'
import { FontMaterial, Material, TextureMaterial } from '@/types/material'
import { Materials } from '@/types/misc'
import { Panel } from '@/types/panel'
import { Widget } from '@/types/widget'
import * as fs from 'node:fs/promises'
import path from 'path'

run()

async function run() {
  const materials = await cleanupMaterials()
  await deleteUnreferencedTextures(materials)
}

async function deleteUnreferencedTextures(materials: Materials) {
  const filesAndDirectories = await fs.readdir(PUBLIC_URL, {
    recursive: true,
    withFileTypes: true,
    encoding: 'utf-8',
  })
  const files = filesAndDirectories
    .filter((f) => f.isFile())
    .map((f) => {
      return path.relative(PUBLIC_URL.pathname, path.join(f.path, f.name))
    })

  const textures = files.filter(
    (f) => f.startsWith('textures/') && !f.endsWith('.DS_Store'),
  )

  const referencedFiles = materials.AtlasTextures.flatMap(({ AtlasDef }) => {
    return AtlasDef.Textures.map((t) => t.FileName)
  })

  // reloadTime.png is referenced in materials.json incorrectly
  {
    const reloadTimeReferenceIndex = referencedFiles.indexOf(
      'textures/ingame/staticons/reloadtime.png',
    )
    referencedFiles[reloadTimeReferenceIndex] =
      'textures/ingame/staticons/reloadTime.png'
  }

  const unreferencedFiles = textures.filter((t) => !referencedFiles.includes(t))

  await Promise.allSettled(
    unreferencedFiles.map((f) => fs.rm(path.join(PUBLIC_URL.pathname, f))),
  )

  console.log(`Deleted ${unreferencedFiles.length} unreferenced texture files`)
}

async function cleanupMaterials() {
  const data = await loadGameMaterials()
  const references = await getMaterialReferences()

  const referencedMaterialDefinitions = findReferencedMaterialDefinitions(
    data,
    references,
  )
  const materialsByAtlasRef = getTexturesByAtlasRef(
    referencedMaterialDefinitions,
  )

  const materials = {
    Materials: referencedMaterialDefinitions,
    AtlasTextures: [],
    GlobalTextures: [],
  } as Materials

  for (const [atlasRef, textureRefs] of Object.entries(materialsByAtlasRef)) {
    const def = data.AtlasTextures.find((a) => a.AtlasDef.Name === atlasRef)!
    const textures = def.AtlasDef.Textures.filter((t) =>
      textureRefs.includes(t.RefName),
    )

    materials.AtlasTextures.push({
      AtlasDef: {
        ...def.AtlasDef,
        Textures: textures,
      },
    })
  }

  await writeAppMaterials(materials)

  return materials
}

function getTexturesByAtlasRef(materials: Materials['Materials']) {
  const texturesByAtlasRef: Record<string, string[]> = {}

  for (const material of materials) {
    if (material.MaterialDef.Type !== 'Atlas') continue

    const atlasRef = material.MaterialDef.AtlasRef

    if (!texturesByAtlasRef[atlasRef]) {
      texturesByAtlasRef[atlasRef] = [material.MaterialDef.TextureRef]
    } else {
      texturesByAtlasRef[atlasRef].push(material.MaterialDef.TextureRef)
    }
  }

  return texturesByAtlasRef
}

function findReferencedMaterialDefinitions(
  materials: Materials,
  materialReferences: string[],
) {
  const definitions: Materials['Materials'] = []

  for (const reference of materialReferences) {
    if (reference === 'CivEmblem') {
      const emblems = materials.Materials.filter((m) =>
        m.MaterialDef.Name.startsWith('CivEmblem'),
      ).map((m) => m.MaterialDef.Name)
      for (const emblem of emblems) {
        definitions.push(
          materials.Materials.find((m) => m.MaterialDef.Name === emblem)!,
        )
      }
      continue
    }

    const material = materials.Materials.find(
      (m) => m.MaterialDef.Name === reference,
    )
    if (!material) continue

    definitions.push(material)
  }

  return definitions
}

async function getMaterialReferences(): Promise<string[]> {
  const panels = await loadGamePanels()
  const materialReferences = new Set<string>(
    (await Promise.all(panels.map(getPanelMaterialReferences))).flat(),
  )

  return Array.from(materialReferences)
}

function getPanelMaterialReferences(panel: Panel): string[] {
  const materialReferences = new Set<string>()

  for (const { Widget: widget } of panel.Collection.Widgets) {
    visitWidget(widget)
  }

  return Array.from(materialReferences)

  function visitWidget(widget: Widget) {
    for (const state in widget.StateMaterials) {
      const material = widget.StateMaterials[state]

      if (typeof material !== 'number' && isTextureMaterial(material)) {
        materialReferences.add(material.Material)
      }
    }

    if (widget.ChildWidgets) {
      for (const { Widget: childWidget } of widget.ChildWidgets) {
        visitWidget(childWidget)
      }
    }
  }
}

export function isFontMaterial(material: Material): material is FontMaterial {
  return (material as FontMaterial).Font !== undefined
}

export function isTextureMaterial(
  material: Material,
): material is TextureMaterial {
  return (
    (material as TextureMaterial).Material !== undefined &&
    (material as TextureMaterial).Material !== 'None'
  )
}
