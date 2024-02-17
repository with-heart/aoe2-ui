import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { many, one } from '../test-utils'
import { IconValue } from './icon'
import { HotKey } from './misc'
import {
  Alignment,
  Anchor,
  Box,
  Image,
  ListBox,
  Size,
  TextBox,
  ValueBox,
  ViewPort,
} from './screen'
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
  ProgressBarWidget,
  ScrollBarVerticalWidget,
  TechTreeButtonWidget,
  TextBoxWidget,
  TextWidget,
  ViewportWidget,
  WidgetBase,
  WidgetType,
} from './widget'

test('WidgetType', () => {
  const is = S.is(WidgetType)

  expect(is('Anchor')).toBeTrue()
  expect(is('Base')).toBeTrue()
  expect(is('Button')).toBeTrue()
  expect(is('CheckBox')).toBeTrue()
  expect(is('ClipArea')).toBeTrue()
  expect(is('CommandButton')).toBeTrue()
  expect(is('DropDown')).toBeTrue()
  expect(is('Label')).toBeTrue()
  expect(is('ListBox')).toBeTrue()
  expect(is('MapView')).toBeTrue()
  expect(is('MarkUpTextBox')).toBeTrue()
  expect(is('MultiColorTextBox')).toBeTrue()
  expect(is('ProgressBar')).toBeTrue()
  expect(is('ScrollBarVertical')).toBeTrue()
  expect(is('Surround')).toBeTrue()
  expect(is('TechTreeButton')).toBeTrue()
  expect(is('TextBox')).toBeTrue()
  expect(is('SomeOtherWidget')).toBeFalse()
})

test('WidgetBase', () => {
  const valid: WidgetBase = {}
  const is = S.is(WidgetBase, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Name: 'name' })).toBeTrue()
  expect(is({ ...valid, show: true })).toBeTrue()
  expect(is({ ...valid, test: 1 })).toBeTrue()
  expect(is({ ...valid, ChildWidgets: [] })).toBeTrue()
  expect(is({ ...valid, StateMaterials: {} })).toBeTrue()
})

test('ViewportWidget', () => {
  const valid: ViewportWidget = {
    ViewPort: one(ViewPort),
  }
  const is = S.is(ViewportWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('TextWidget', () => {
  const valid: TextWidget = {
    ViewPort: one(ViewPort),
    TextAnchor: one(Alignment),
  }
  const is = S.is(TextWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('AnchorWidget', () => {
  const valid: AnchorWidget = {
    Type: 'Anchor',
    Anchor: one(Anchor),
  }
  const is = S.is(AnchorWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('BaseWidget', () => {
  const valid: BaseWidget = {
    Type: 'Base',
    ViewPort: one(ViewPort),
  }
  const is = S.is(BaseWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Image: one(Image) })).toBeTrue()
  expect(is({ ...valid, Wrap: one(Size) })).toBeTrue()
  expect(is({ ...valid, Help: 1 })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('ButtonWidget', () => {
  const valid: ButtonWidget = {
    Type: 'Button',
    ViewPort: one(ViewPort),
  }
  const is = S.is(ButtonWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, AccessibilityTextOverride: '1' })).toBeTrue()
  expect(is({ ...valid, ClickSound: 'sound' })).toBeTrue()
  expect(is({ ...valid, disabled: true })).toBeTrue()
  expect(is({ ...valid, 'FIXME-IDS': 1 })).toBeTrue()
  expect(is({ ...valid, Help: 1 })).toBeTrue()
  expect(is({ ...valid, HotKey: one(HotKey) })).toBeTrue()
  expect(is({ ...valid, Radius: 30 })).toBeTrue()
  expect(is({ ...valid, TextAnchor: one(Alignment) })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('CheckBoxWidget', () => {
  const valid: CheckBoxWidget = {
    Type: 'CheckBox',
    ViewPort: one(ViewPort),
    Help: 1,
    Image: one(Image),
  }
  const is = S.is(CheckBoxWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('ClipAreaWidget', () => {
  const valid: ClipAreaWidget = {
    Type: 'ClipArea',
    ViewPort: one(ViewPort),
    Image: one(Image),
  }
  const is = S.is(ClipAreaWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('CommandButtonWidget', () => {
  const valid: CommandButtonWidget = {
    Type: 'CommandButton',
    ViewPort: one(ViewPort),
  }
  const is = S.is(CommandButtonWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('DropDownWidget', () => {
  const valid: DropDownWidget = {
    Type: 'DropDown',
    ViewPort: one(ViewPort),
    AccessibilityName: 'name',
    Button: one(Box),
    Help: 1,
    'FIXME-IDS': 1,
    ValueBox: one(ValueBox),
  }
  const is = S.is(DropDownWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('LabelWidget', () => {
  const valid: LabelWidget = {
    Type: 'Label',
    ViewPort: one(ViewPort),
    TextAnchor: one(Alignment),
  }
  const is = S.is(LabelWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, AutoSize: true })).toBeTrue()
  expect(is({ ...valid, ClippingOverride: 'BackgroundRight' })).toBeTrue()
  expect(is({ ...valid, Help: 1 })).toBeTrue()
  expect(is({ ...valid, ClippingOverride: 'TopLeft' })).toBeFalse()
  expect(is({})).toBeFalse()
})

test('ListBoxWidget', () => {
  const valid: ListBoxWidget = {
    Type: 'ListBox',
    ViewPort: one(ViewPort),
    Help: 1,
    ListBox: one(ListBox),
  }
  const is = S.is(ListBoxWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, 'FIXME-IDS': 1 })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('MapViewWidget', () => {
  const valid: MapViewWidget = {
    Type: 'MapView',
    ViewPort: one(ViewPort),
    Help: 1,
    Image: one(Image),
  }
  const is = S.is(MapViewWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('MarkUpTextBoxWidget', () => {
  const valid: MarkUpTextBoxWidget = {
    Type: 'MarkUpTextBox',
    TextAnchor: one(Alignment),
    TextBox: one(TextBox),
    ViewPort: one(ViewPort),
  }
  const is = S.is(MarkUpTextBoxWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})

test('ProgressBarWidget', () => {
  const valid: ProgressBarWidget = {
    Type: 'ProgressBar',
    ViewPort: one(ViewPort),
  }
  const is = S.is(ProgressBarWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Help: 1 })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('ScrollBarVerticalWidget', () => {
  const valid: ScrollBarVerticalWidget = {
    Type: 'ScrollBarVertical',
    Bar: one(Box),
    MaxButton: one(Box),
    MinButton: one(Box),
    TabSize: one(Size),
    ViewPort: one(ViewPort),
  }
  const is = S.is(ScrollBarVerticalWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, AutoSize: true })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('TechTreeButtonWidget', () => {
  const valid: TechTreeButtonWidget = {
    Type: 'TechTreeButton',
    ViewPort: one(ViewPort),
    IconValues: many(IconValue),
  }
  const is = S.is(TechTreeButtonWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Help: 'string' })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('TextBoxWidget', () => {
  const valid: TextBoxWidget = {
    Type: 'TextBox',
    TextAnchor: one(Alignment),
    TextBox: one(TextBox),
    ViewPort: one(ViewPort),
  }
  const is = S.is(TextBoxWidget, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({})).toBeFalse()
})
