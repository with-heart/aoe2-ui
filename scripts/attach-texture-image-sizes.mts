import path from 'path'
import sizeOf from 'image-size'
import { pathToFileURL } from 'url'
import * as fs from 'fs/promises'
import { CollapsedMaterials } from './flatten-materials.mts'

const PUBLIC_PATH = pathToFileURL('public').pathname
const MATERIALS_PATH = pathToFileURL('src/json/materials.json').pathname

interface Texture {
  type: 'texture'
  filename: string
  width: number
  height: number
}

interface Color {
  type: 'color'
  color: string
}

export interface BetterMaterials {
  [key: string]: Texture | Color
}

run()

async function run() {
  const data = JSON.parse(
    await fs.readFile(MATERIALS_PATH, 'utf-8'),
  ) as CollapsedMaterials

  const materials: BetterMaterials = {}

  for (const key in data) {
    const material = data[key]

    if (material.type === 'color') {
      materials[key] = material
      continue
    }

    const { width, height } = sizeOf(path.join(PUBLIC_PATH, material.filename))
    materials[key] = {
      ...material,
      width: width!,
      height: height!,
    }
  }

  await fs.writeFile(MATERIALS_PATH, JSON.stringify(materials), 'utf-8')
}
