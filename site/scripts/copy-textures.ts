#!/usr/bin/env tsx

import { TEXTURES_URL } from '@/constants'
import { cp, readdir, rm } from 'node:fs/promises'
import path from 'node:path'

const WIDGETUI_PATH = path.dirname(require.resolve('widgetui/package.json'))
const WIDGETUI_TEXTURES_PATH = path.join(WIDGETUI_PATH, 'textures')

run()

async function run() {
  console.log('Removing public/textures')
  await rm(TEXTURES_URL, { recursive: true, force: true })

  console.log('Copying widgetui/textures to site/public')
  await cp(WIDGETUI_TEXTURES_PATH, TEXTURES_URL, { recursive: true })

  const files = await readdir(TEXTURES_URL, { recursive: true })
  console.log(`Copied ${files.length} texture files`)
}
