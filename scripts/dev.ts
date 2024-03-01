import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import pkg from '../package.json'

buildWorkspaces()

async function buildWorkspaces() {
  for (const workspace of await getWorkspaces()) {
    if (await isPrivateWorkspace(workspace)) continue

    await buildWorkspace(workspace)
  }
}

async function buildWorkspace(workspace: string) {
  const workspacePath = path.join(process.cwd(), workspace)

  const dist = path.join(workspacePath, 'dist')
  const source = path.relative(
    dist,
    path.join(workspacePath, 'src', 'index.ts'),
  )
  const output = `export * from '${source}'`

  const index = Bun.file(path.join(dist, 'index.js'))
  const types = Bun.file(path.join(dist, 'index.d.ts'))

  await fs.rm(dist, { recursive: true })
  await fs.mkdir(dist)

  await Bun.write(index, output)
  await Bun.write(types, output)
}

async function getWorkspaces() {
  const workspaces = []

  for (const workspace of pkg.workspaces) {
    const glob = new Bun.Glob(workspace)

    for await (const result of glob.scan({ onlyFiles: false })) {
      workspaces.push(result)
    }
  }

  return workspaces
}

async function isPrivateWorkspace(workspace: string): Promise<boolean> {
  const pkg = await import(path.join(process.cwd(), workspace, 'package.json'))
  return pkg.private === true
}
