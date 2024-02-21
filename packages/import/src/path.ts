import type { Dirent, PathLike } from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROOT_URL } from './constants'

export const relativeFrom = (from: PathLike) => {
  const fromPath =
    typeof from === 'string' ? from
    : from instanceof Buffer ? from.toString()
    : fileURLToPath(from)
  return (to: PathLike) => {
    const toPath =
      typeof to === 'string' ? to
      : to instanceof Buffer ? to.toString()
      : fileURLToPath(to)
    return path.relative(fromPath, toPath)
  }
}

export const relativeFromRoot = relativeFrom(ROOT_URL)

export const pathname = (dirent: Dirent) => path.join(dirent.path, dirent.name)
