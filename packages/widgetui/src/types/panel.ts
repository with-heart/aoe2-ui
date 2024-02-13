import type { Font } from './material'
import type { Viewport } from './screen'
import type { Widget } from './widget'

export type Panel = { Collection: Collection }

export type Collection = CollectionBase | ActionButtonCollection

export interface CollectionBase {
  Name: string
  ViewPort: Viewport
  Widgets: { Widget: Widget }[]
  xclip?: number
  xclosed?: number
  xopen?: number
  yclosed?: number
  yopen?: number
}

export interface ActionButtonCollection extends CollectionBase {
  ActionButtonFont: Font
  ActionButtonMaterialDisabled: string
  ActionButtonMaterialNormal: string
  ActionButtonMaterialHover: string
  ActionButtonMaterialActive: string
}
