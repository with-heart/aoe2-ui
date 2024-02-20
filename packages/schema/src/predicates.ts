import * as S from '@effect/schema/Schema'
import {
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
} from './schema'

export const isAnchorWidget = S.is(AnchorWidget)

export const isBaseWidget = S.is(BaseWidget)

export const isButtonWidget = S.is(ButtonWidget)

export const isCheckBoxWidget = S.is(CheckBoxWidget)

export const isClipAreaWidget = S.is(ClipAreaWidget)

export const isCommandButtonWidget = S.is(CommandButtonWidget)

export const isDropDownWidget = S.is(DropDownWidget)

export const isLabelWidget = S.is(LabelWidget)

export const isListBoxWidget = S.is(ListBoxWidget)

export const isMapViewWidget = S.is(MapViewWidget)

export const isMarkUpTextBoxWidget = S.is(MarkUpTextBoxWidget)

export const isMultiColorTextBoxWidget = S.is(MultiColorTextBoxWidget)

export const isProgressBarWidget = S.is(ProgressBarWidget)

export const isScrollBarVerticalWidget = S.is(ScrollBarVerticalWidget)

export const isSurroundWidget = S.is(SurroundWidget)

export const isTechTreeButtonWidget = S.is(TechTreeButtonWidget)

export const isTextBoxWidget = S.is(TextBoxWidget)
