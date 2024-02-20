import * as S from '@effect/schema/Schema'
import { ViewPort } from './screen'
import { Font } from './state-materials'
import { WidgetDef } from './widget'

export const CollectionBase = S.struct({
  Name: S.string,
  ViewPort: ViewPort,
  Widgets: S.array(WidgetDef),
})

export type CollectionBase = S.Schema.To<typeof CollectionBase>

export const ActionButtonCollection = CollectionBase.pipe(
  S.extend(
    S.struct({
      ActionButtonFont: Font,
      ActionButtonMaterialDisabled: S.string,
      ActionButtonMaterialNormal: S.string,
      ActionButtonMaterialHover: S.string,
      ActionButtonMaterialActive: S.string,
      xclip: S.optional(S.number, { exact: true }),
      xclosed: S.optional(S.number, { exact: true }),
      xopen: S.optional(S.number, { exact: true }),
      yclosed: S.optional(S.number, { exact: true }),
      yopen: S.optional(S.number, { exact: true }),
    }),
  ),
)

export type ActionButtonCollection = S.Schema.To<typeof ActionButtonCollection>

export const Collection = S.union(CollectionBase, ActionButtonCollection)

export type Collection = S.Schema.To<typeof Collection>

export const Panel = S.struct({
  Collection,
})

export type Panel = S.Schema.To<typeof Panel>
