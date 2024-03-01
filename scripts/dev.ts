import * as fs from 'node:fs/promises'
import { getWorkspaces, type Workspace } from './workspace'

buildWorkspaces()

async function buildWorkspaces() {
  for (const workspace of await getWorkspaces(true)) {
    await buildWorkspace(workspace)
  }
}

async function buildWorkspace(workspace: Workspace) {
  const { paths } = workspace

  await fs.rm(paths.dist, { recursive: true })
  await fs.mkdir(paths.dist)

  const output = `export * from '${paths.source}'`

  await Bun.write(paths.module, output)
  await Bun.write(paths.types, output)
}
