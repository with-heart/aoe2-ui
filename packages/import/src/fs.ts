import * as S from '@effect/schema/Schema'
import * as fs from 'node:fs/promises'
import { PANEL_FILES } from './constants'

export async function exists(path: string): Promise<boolean> {
  try {
    await fs.stat(path)
    return true
  } catch {
    return false
  }
}

export async function assertDirectoryStructure(dir: string) {
  if (!(await exists(dir))) {
    throw new Error(`The provided directory does not exist: ${dir}`)
  }

  const files = await fs.readdir(dir)

  if (!files.includes('textures')) {
    throw new Error(
      'The provided directory does not contain required "textures" directory',
    )
  }

  if (!files.includes('materials.json')) {
    throw new Error(
      'The provided directory does not contain required "materials.json" file',
    )
  }

  for (const file of PANEL_FILES) {
    if (!files.includes(file)) {
      throw new Error(
        `The provided directory does not contain required "${file}" file`,
      )
    }
  }
}

export async function decodeFile<A>(
  path: string,
  schema: S.Schema<A>,
): Promise<A> {
  const decode = S.decodeUnknownSync(S.parseJson(schema), {
    errors: 'all',
    onExcessProperty: 'error',
  })

  let text: string
  try {
    text = await fs.readFile(path, 'utf-8')
  } catch {
    throw new Error(`Could not read file: ${path}`)
  }

  try {
    return decode(text)
  } catch (error) {
    throw new Error(`Error parsing file: ${path}\n${error}`)
  }
}
