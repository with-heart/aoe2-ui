import sizeOf from 'image-size'
import * as path from 'node:path'
import { materials } from 'widgetui'
import { isAtlasMaterialDef, isTextureMaterialDef } from 'widgetui/schema'
import { SITE_MATERIALS_JSON_URL, SITE_TEXTURES_URL } from './constants'

const filesGlob = new Bun.Glob('**/*.png')

interface Texture {
  href: string
  width: number
  height: number
}

export async function writeSiteTextures() {
  const nameByPath = mapMaterialNameByTexturePath()
  const record: Record<string, Texture> = {}

  for await (const file of filesGlob.scan(SITE_TEXTURES_URL.pathname)) {
    const url = new URL(file, SITE_TEXTURES_URL)
    const dimensions = sizeOf(url.pathname)

    if (!dimensions.width || !dimensions.height) {
      console.error(`Invalid dimensions for ${url}`)
      continue
    }

    const name = nameByPath[`textures/${file}`]

    if (name === undefined) {
      console.error(`No material found for ${file}`)
      continue
    }

    record[name] = {
      href: path.join(
        '/textures',
        path.relative(SITE_TEXTURES_URL.pathname, url.pathname),
      ),
      width: dimensions.width,
      height: dimensions.height,
    }
  }

  console.log(
    `Writing ${Object.keys(record).length} materials to materials.json`,
  )
  await Bun.write(
    SITE_MATERIALS_JSON_URL.pathname,
    JSON.stringify(sortKeysAlphabetically(record)),
  )
}

function mapMaterialNameByTexturePath(): Record<string, string> {
  const nameByPath: Record<string, string> = {}

  for (const material of materials.Materials) {
    if (isTextureMaterialDef(material.MaterialDef)) {
      const { Name, TextureRef } = material.MaterialDef
      const texture = materials.GlobalTextures.find(
        (texture) => texture.TextureDef.Name === TextureRef,
      )

      if (!texture) {
        console.error(
          `Referenced global texture not found: ${TextureRef} (${Name})`,
        )
        continue
      }
      if (!texture.TextureDef.FileName.endsWith('.png')) continue

      nameByPath[texture.TextureDef.FileName] = Name
    }

    if (isAtlasMaterialDef(material.MaterialDef)) {
      const { Name, TextureRef, AtlasRef } = material.MaterialDef

      if (!AtlasRef) {
        console.error(`Atlas material with no atlas ref: ${Name}`)
        continue
      }

      const atlas = materials.AtlasTextures.find(
        (atlas) => atlas.AtlasDef.Name === AtlasRef,
      )

      if (!atlas) {
        console.error(`Atlas ${AtlasRef} not found (${Name})`)
        continue
      }

      const texture = atlas.AtlasDef.Textures.find(
        (texture) => texture.RefName === TextureRef,
      )

      if (!texture) {
        console.error(
          `Texture ${TextureRef} not found in atlas ${AtlasRef} (${Name})`,
        )
        continue
      }

      if (!texture.FileName.endsWith('.png')) continue

      nameByPath[texture.FileName] = Name
    }
  }

  return nameByPath
}

function sortKeysAlphabetically(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)),
  )
}
