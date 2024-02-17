import * as S from '@effect/schema/Schema'

export const IconValue = S.struct({
  TechId: S.number,
  CivIds: S.optional(S.array(S.number), { exact: true }),
  ExcludeCivs: S.optional(S.boolean, { exact: true }),
  UnitId: S.optional(S.number, { exact: true }),
  TeamBonus: S.optional(S.boolean, { exact: true }),
})
export type IconValue = S.Schema.To<typeof IconValue>
