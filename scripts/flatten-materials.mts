import { pathToFileURL } from 'node:url'
import path from 'path'
import * as fs from 'fs/promises'
import { Materials } from '../src/types/misc'

const JSON_PATH = pathToFileURL('src/json').pathname
const MATERIALS_PATH = path.join(JSON_PATH, 'materials.json')

run()

interface Texture {
  type: 'texture'
  filename: string
}

interface Color {
  type: 'color'
  color: string
}

export type CollapsedMaterials = Record<string, Texture | Color>

async function run() {
  const materials = JSON.parse(
    await fs.readFile(MATERIALS_PATH, 'utf-8'),
  ) as Materials

  const collapsedMaterials = materials.Materials.reduce((acc, cur) => {
    if (cur.MaterialDef.Type === 'Atlas') {
      const { AtlasRef, Name, TextureRef } = cur.MaterialDef

      const atlasDef = materials.AtlasTextures.find(
        ({ AtlasDef: def }) => def.Name === AtlasRef,
      )!
      const textureDef = atlasDef.AtlasDef.Textures.find(
        (texture) => texture.RefName === TextureRef,
      )!

      if (!textureDef) {
        // we reach this point for texture "AgeupCastleAge" bc it doesn't have a
        // texture def. not sure why
        return acc
      }

      acc[Name] = {
        type: 'texture',
        filename: textureDef.FileName,
      }
    }

    if (cur.MaterialDef.Type === 'Color') {
      let hex = toHex(cur.MaterialDef.Color)

      if (cur.MaterialDef.Name === 'FlatColor') {
        hex = hex.slice(0, hex.length - 2)
      }

      acc[cur.MaterialDef.Name] = {
        type: 'color',
        color: hex,
      }
    }

    return acc
  }, {} as CollapsedMaterials)

  await fs.writeFile(
    path.join(JSON_PATH, 'materials.json'),
    JSON.stringify(collapsedMaterials, null, 2),
  )
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
