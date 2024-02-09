import * as fs from 'fs/promises'
import sizeOf from 'image-size'
import path from 'path'
import { CollapsedMaterials } from './flatten-materials.mjs'
import { APP_MATERIALS_URL, PUBLIC_URL } from '@/constants'

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
    await fs.readFile(APP_MATERIALS_URL, 'utf-8'),
  ) as CollapsedMaterials

  const materials: BetterMaterials = {}

  for (const key in data) {
    const material = data[key]

    if (material.type === 'color') {
      materials[key] = material
      continue
    }

    const { width, height } = sizeOf(
      path.join(PUBLIC_URL.pathname, material.filename),
    )
    materials[key] = {
      ...material,
      width: width!,
      height: height!,
    }
  }

  await fs.writeFile(APP_MATERIALS_URL, JSON.stringify(materials), 'utf-8')
}
