import * as path from 'node:path'
import pkg from '../package.json'

export type WorkspacePaths = {
  module: string
  types: string
  dist: string
  source: string
}

export type Workspace = {
  path: string
  packageJson: any
  paths: WorkspacePaths
}

export async function getWorkspaces(
  skipPrivateWorkspaces = false,
): Promise<Workspace[]> {
  const workspaces: Workspace[] = []

  for (const workspace of pkg.workspaces) {
    const glob = new Bun.Glob(workspace)

    for await (const pathFromCwd of glob.scan({ onlyFiles: false })) {
      const workspacePath = path.join(process.cwd(), pathFromCwd)
      const packageJson = await getWorkspacePackageJson(workspacePath)

      if (skipPrivateWorkspaces && packageJson.private) continue

      workspaces.push({
        path: workspacePath,
        packageJson,
        paths: getWorkspacePaths(workspacePath, packageJson),
      })
    }
  }

  return workspaces
}

async function getWorkspacePackageJson(workspacePath: string): Promise<any> {
  return await import(path.join(workspacePath, 'package.json'))
}

function getWorkspacePaths(
  workspacePath: string,
  packageJson: any,
): WorkspacePaths {
  const modulePath = path.join(workspacePath, packageJson.module)
  const distPath = path.dirname(modulePath)

  return {
    module: modulePath,
    types: path.join(workspacePath, packageJson.types),
    dist: distPath,
    source: path.relative(
      distPath,
      path.join(workspacePath, 'src', 'index.ts'),
    ),
  }
}
