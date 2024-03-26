import * as S from '@effect/schema/Schema'
import { Color } from './color'

export const FontStyle = S.literal('Normal', 'Outlined')

export type FontStyle = S.Schema.To<typeof FontStyle>

export const Font = S.struct({
  FontIndex: S.number,
  PointSize: S.number,
  Style: FontStyle,
  AllowGameModeTextColorOverride: S.optional(S.boolean, { exact: true }),
  TextColor: S.optional(Color, { exact: true }),
  TextOutlineColor: S.optional(Color, { exact: true }),
  TextOutlineWidth: S.optional(S.number, { exact: true }),
})

export type Font = S.Schema.To<typeof Font>

export const Material = S.struct({
  Material: S.optional(S.string, { exact: true }),
  Font: S.optional(Font, { exact: true }),
  Color: S.optional(Color, { exact: true }),
  TextColor: S.optional(Color, { exact: true }),
})

export type Material = S.Schema.To<typeof Material>

export const UserStates = S.record(S.literal('UserStates'), S.number).pipe(
  S.extend(
    S.record(S.templateLiteral(S.literal('UserState'), S.number), Material),
  ),
)

export type UserStates = S.Schema.To<typeof UserStates>

export const isUserStates = S.is(UserStates)

export const StatusStates = S.record(
  S.templateLiteral(S.literal('State'), S.string),
  Material,
)

export type StatusStates = S.Schema.To<typeof StatusStates>

export const isStatusStates = S.is(StatusStates)

export const StateMaterials = S.union(UserStates, StatusStates)

export type StateMaterials = S.Schema.To<typeof StateMaterials>
