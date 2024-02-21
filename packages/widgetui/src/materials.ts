import * as S from '@effect/schema/Schema'
import { Materials } from 'schema'
import materialsJSON from '../json/materials.json'

export const materials = S.decodeUnknownSync(Materials)(materialsJSON)
