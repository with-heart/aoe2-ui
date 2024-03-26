import { Collection, Widget } from 'widgetui/schema'

export type Element = Collection | Widget

export interface Texture {
  readonly href: string
  readonly width: number
  readonly height: number
}
export interface Viewport {
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
}
