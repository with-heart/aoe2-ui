import * as S from '@effect/schema/Schema'
import { IconValue } from './icon'
import { HotKey } from './misc'
import {
  Alignment,
  Anchor,
  Box,
  Image,
  ListBox,
  Offset,
  Size,
  SurroundBox,
  TextBox,
  ValueBox,
  ViewPort,
} from './screen'
import { StateMaterials } from './state-materials'

export const WidgetType = S.literal(
  'Anchor',
  'Base',
  'Button',
  'CheckBox',
  'ClipArea',
  'CommandButton',
  'DropDown',
  'Label',
  'ListBox',
  'MapView',
  'MarkUpTextBox',
  'MultiColorTextBox',
  'ProgressBar',
  'ScrollBarVertical',
  'Surround',
  'TechTreeButton',
  'TextBox',
)

export type WidgetType = S.Schema.To<typeof WidgetType>

export const WidgetBase = S.struct({
  Name: S.optional(S.string, { exact: true }),
  show: S.optional(S.boolean, { exact: true }),
  test: S.optional(S.number, { exact: true }),
  ZPlane: S.optional(S.number, { exact: true }),
  ZPlaneLocalOffset: S.optional(S.number, { exact: true }),
  ChildWidgets: S.optional(S.array(S.suspend(() => WidgetDef)), {
    exact: true,
  }),
  StateMaterials: S.optional(StateMaterials, { exact: true }),
})

export type WidgetBase = S.Schema.To<typeof WidgetBase>

export const WidgetDef: S.Schema<WidgetDef> = S.struct({
  Widget: S.suspend(() => Widget),
})

export interface WidgetDef {
  Widget: Widget
}

export const ViewportWidget = WidgetBase.pipe(
  S.extend(
    S.struct({
      ViewPort: ViewPort,
    }),
  ),
)

export type ViewportWidget = S.Schema.To<typeof ViewportWidget>

export const TextWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Text: S.optional(S.union(S.string, S.number), { exact: true }),
      TextAnchor: Alignment,
      TextOffset: S.optional(Offset, { exact: true }),
    }),
  ),
)

export type TextWidget = S.Schema.To<typeof TextWidget>

export const AnchorWidget = WidgetBase.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Anchor'),
      Anchor: Anchor,
    }),
  ),
)

export type AnchorWidget = S.Schema.To<typeof AnchorWidget>

export const isAnchorWidget = S.is(AnchorWidget)

export const BaseWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Base'),
      Image: S.optional(Image, { exact: true }),
      Wrap: S.optional(Size, { exact: true }),
      Help: S.optional(S.number, { exact: true }),
    }),
  ),
)

export type BaseWidget = S.Schema.To<typeof BaseWidget>

export const isBaseWidget = S.is(BaseWidget)

export const ButtonWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Button'),
      AccessibilityTextOverride: S.optional(S.string, { exact: true }),
      ClickSound: S.optional(S.string, { exact: true }),
      disabled: S.optional(S.boolean, { exact: true }),
      'FIXME-IDS': S.optional(S.number, { exact: true }),
      Help: S.optional(S.number, { exact: true }),
      HotKey: S.optional(HotKey, { exact: true }),
      Radius: S.optional(S.number, { exact: true }),
      TextAnchor: S.optional(Alignment, { exact: true }),
    }),
  ),
)

export type ButtonWidget = S.Schema.To<typeof ButtonWidget>

export const isButtonWidget = S.is(ButtonWidget)

export const CheckBoxWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('CheckBox'),
      Help: S.union(S.string, S.number),
      Image: Image,
    }),
  ),
)

export type CheckBoxWidget = S.Schema.To<typeof CheckBoxWidget>

export const isCheckBoxWidget = S.is(CheckBoxWidget)

export const ClipAreaWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('ClipArea'),
      Image,
    }),
  ),
)

export type ClipAreaWidget = S.Schema.To<typeof ClipAreaWidget>

export const isClipAreaWidget = S.is(ClipAreaWidget)

export const CommandButtonWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('CommandButton'),
      Help: S.optional(S.number, { exact: true }),
    }),
  ),
)

export type CommandButtonWidget = S.Schema.To<typeof CommandButtonWidget>

export const isCommandButtonWidget = S.is(CommandButtonWidget)

export const DropDownWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('DropDown'),
      AccessibilityName: S.string,
      Button: Box,
      Help: S.number,
      'FIXME-IDS': S.number,
      ValueBox,
    }),
  ),
)

export type DropDownWidget = S.Schema.To<typeof DropDownWidget>

export const isDropDownWidget = S.is(DropDownWidget)

export const LabelWidget = TextWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Label'),
      AutoSize: S.optional(S.boolean, { exact: true }),
      ClippingOverride: S.optional(S.literal('BackgroundRight'), {
        exact: true,
      }),
      Help: S.optional(S.number, { exact: true }),
    }),
  ),
)

export type LabelWidget = S.Schema.To<typeof LabelWidget>

export const isLabelWidget = S.is(LabelWidget)

export const ListBoxWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('ListBox'),
      'FIXME-IDS': S.optional(S.number, { exact: true }),
      Help: S.number,
      ListBox,
    }),
  ),
)

export type ListBoxWidget = S.Schema.To<typeof ListBoxWidget>

export const isListBoxWidget = S.is(ListBoxWidget)

export const MapViewWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('MapView'),
      Help: S.number,
      Image: Image,
    }),
  ),
)

export type MapViewWidget = S.Schema.To<typeof MapViewWidget>

export const isMapViewWidget = S.is(MapViewWidget)

export const MarkUpTextBoxWidget = TextWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('MarkUpTextBox'),
      TextBox,
    }),
  ),
)

export type MarkUpTextBoxWidget = S.Schema.To<typeof MarkUpTextBoxWidget>

export const isMarkUpTextBoxWidget = S.is(MarkUpTextBoxWidget)

export const MultiColorTextBoxWidget = TextWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('MultiColorTextBox'),
      TextBox,
    }),
  ),
)

export type MultiColorTextBoxWidget = S.Schema.To<
  typeof MultiColorTextBoxWidget
>

export const isMultiColorTextBoxWidget = S.is(MultiColorTextBoxWidget)

export const ProgressBarWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('ProgressBar'),
      Help: S.optional(S.number, { exact: true }),
    }),
  ),
)

export type ProgressBarWidget = S.Schema.To<typeof ProgressBarWidget>

export const isProgressBarWidget = S.is(ProgressBarWidget)

export const ScrollBarVerticalWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('ScrollBarVertical'),
      AutoSize: S.optional(S.boolean, { exact: true }),
      Bar: Box,
      MinButton: Box,
      MaxButton: Box,
      TabSize: Size,
    }),
  ),
)

export type ScrollBarVerticalWidget = S.Schema.To<
  typeof ScrollBarVerticalWidget
>

export const isScrollBarVerticalWidget = S.is(ScrollBarVerticalWidget)

export const SurroundWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('Surround'),
      Box: SurroundBox,
    }),
  ),
)

export type SurroundWidget = S.Schema.To<typeof SurroundWidget>

export const isSurroundWidget = S.is(SurroundWidget)

export const TechTreeButtonWidget = ViewportWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('TechTreeButton'),
      IconValues: S.array(IconValue),
      Help: S.optional(S.string, { exact: true }),
    }),
  ),
)

export type TechTreeButtonWidget = S.Schema.To<typeof TechTreeButtonWidget>

export const isTechTreeButtonWidget = S.is(TechTreeButtonWidget)

export const TextBoxWidget = TextWidget.pipe(
  S.extend(
    S.struct({
      Type: S.literal('TextBox'),
      TextBox,
    }),
  ),
)

export type TextBoxWidget = S.Schema.To<typeof TextBoxWidget>

export const isTextBoxWidget = S.is(TextBoxWidget)

export const Widget = S.union(
  AnchorWidget,
  BaseWidget,
  ButtonWidget,
  CheckBoxWidget,
  ClipAreaWidget,
  CommandButtonWidget,
  DropDownWidget,
  LabelWidget,
  ListBoxWidget,
  MapViewWidget,
  MarkUpTextBoxWidget,
  MultiColorTextBoxWidget,
  ProgressBarWidget,
  ScrollBarVerticalWidget,
  SurroundWidget,
  TechTreeButtonWidget,
  TextBoxWidget,
)

export type Widget = S.Schema.To<typeof Widget>

export const isWidget = S.is(Widget)
