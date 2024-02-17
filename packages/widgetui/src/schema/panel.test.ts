import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { one } from '../test-utils'
import {
  ActionButtonCollection,
  Collection,
  CollectionBase,
  Panel,
} from './panel'
import { ViewPort } from './screen'
import { Font } from './state-materials'
import { WidgetDef } from './widget'

test('CollectionBase', () => {
  const valid: CollectionBase = {
    Name: 'Collection',
    ViewPort: one(ViewPort),
    Widgets: [one(WidgetDef)],
  }
  const is = S.is(CollectionBase, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Widgets: [] })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('ActionButtonCollection', () => {
  const valid: ActionButtonCollection = {
    Name: 'Collection',
    ViewPort: one(ViewPort),
    Widgets: [one(WidgetDef)],
    ActionButtonFont: one(Font),
    ActionButtonMaterialActive: 'active',
    ActionButtonMaterialDisabled: 'disabled',
    ActionButtonMaterialNormal: 'normal',
    ActionButtonMaterialHover: 'hover',
  }
  const is = S.is(ActionButtonCollection, { onExcessProperty: 'error' })

  expect(is(valid)).toBeTrue()
  expect(is({ ...valid, Widgets: [] })).toBeTrue()
  expect(is({ ...valid, xclip: 1 })).toBeTrue()
  expect(is({ ...valid, xclosed: 1 })).toBeTrue()
  expect(is({ ...valid, xopen: 1 })).toBeTrue()
  expect(is({ ...valid, yclosed: 1 })).toBeTrue()
  expect(is({ ...valid, yopen: 1 })).toBeTrue()
  expect(is({})).toBeFalse()
})

test('Collection', () => {
  const is = S.is(Collection, { onExcessProperty: 'error' })

  expect(is(one(CollectionBase))).toBeTrue()
  expect(is(one(ActionButtonCollection))).toBeTrue()
})

test('Panel', () => {
  const is = S.is(Panel, { onExcessProperty: 'error' })

  expect(is({ Collection: one(CollectionBase) })).toBeTrue()
  expect(is({ Collection: one(ActionButtonCollection) })).toBeTrue()
  expect(is({})).toBeFalse()
})
