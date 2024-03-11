import { SITE_TEXTURES_URL } from './constants'
import { copyFiles, copyTextures } from './copy'
import { assertDirectoryStructure } from './fs'
import { relativeFromRoot } from './path'

run(process.env['AOE2_DIR'] ?? process.argv[2])

async function run(dir?: string) {
  if (!dir) {
    console.error('You must provide a path to the widgetui directory')
    process.exit(1)
  }

  try {
    await assertDirectoryStructure(dir)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }

  console.group('Copying widgetui json files...')
  await copyFiles(dir)
  console.groupEnd()

  console.group(`Copying textures to ${relativeFromRoot(SITE_TEXTURES_URL)}...`)
  await copyTextures(dir)
  console.groupEnd()
}
