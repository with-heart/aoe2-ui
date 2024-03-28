import sizeOf from 'image-size'
import * as path from 'node:path'
import { materials } from 'widgetui'
import { isColorMaterialDef } from 'widgetui/schema'
import { SITE_MATERIALS_JSON_URL, SITE_TEXTURES_URL } from './constants'

const filesGlob = new Bun.Glob('**/*.png')

interface Texture {
  href: string
  width: number
  height: number
}

type TextureRef = string
type Name = string
type FileName = string

type MaterialNameByFileName = Record<FileName, Name>
type FileNameByTextureRef = Record<TextureRef, FileName>
type TextureByName = Record<Name, Texture>

export async function writeSiteTextures() {
  const materialNameByFileName = createMaterialNameByFileName()
  const textures: TextureByName = {}

  for await (const file of filesGlob.scan(SITE_TEXTURES_URL.pathname)) {
    const url = new URL(file, SITE_TEXTURES_URL)
    const dimensions = sizeOf(url.pathname)

    if (!dimensions.width || !dimensions.height) {
      console.error(`Invalid dimensions for ${url}`)
      continue
    }

    const name = materialNameByFileName[`textures/${file.toLowerCase()}`]

    if (name === undefined) {
      console.error(`No material found for ${file}`)
      continue
    }

    textures[name] = {
      href: path.join(
        '/textures',
        path.relative(SITE_TEXTURES_URL.pathname, url.pathname),
      ),
      width: dimensions.width,
      height: dimensions.height,
    }
  }

  console.log(
    `Writing ${Object.keys(textures).length} materials to textures.json`,
  )
  await Bun.write(
    SITE_MATERIALS_JSON_URL.pathname,
    JSON.stringify(sortKeysAlphabetically(textures), null, 2),
  )
}

function createMaterialNameByFileName(): MaterialNameByFileName {
  const fileNameByTextureRef = createFileNameByTextureRef()
  const materialNameByFileName: MaterialNameByFileName = {}

  for (const [textureRef, fileName] of Object.entries(fileNameByTextureRef)) {
    const material = materials.Materials.find(
      (material) =>
        !isColorMaterialDef(material.MaterialDef) &&
        material.MaterialDef.TextureRef === textureRef,
    )

    if (!material || isColorMaterialDef(material.MaterialDef)) continue

    materialNameByFileName[fileName.toLowerCase()] = material.MaterialDef.Name
  }

  return materialNameByFileName
}

function createFileNameByTextureRef(): FileNameByTextureRef {
  return {
    ...mapAtlasTextures(),
    ...mapGlobalTextures(),
  }

  function mapAtlasTextures(): FileNameByTextureRef {
    const textures: FileNameByTextureRef = {}

    for (const { AtlasDef: atlas } of materials.AtlasTextures) {
      for (const texture of atlas.Textures) {
        if (!texture.FileName.endsWith('.png')) continue
        textures[texture.RefName] = texture.FileName
      }
    }

    return textures
  }

  function mapGlobalTextures(): FileNameByTextureRef {
    const textures: FileNameByTextureRef = {}

    for (const { TextureDef: texture } of materials.GlobalTextures) {
      textures[texture.Name] = texture.FileName
    }

    return textures
  }
}

function sortKeysAlphabetically(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)),
  )
}
