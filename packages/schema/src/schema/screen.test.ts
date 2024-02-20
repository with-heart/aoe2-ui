import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { one } from '../test-utils'
import {
  Alignment,
  Anchor,
  Box,
  Image,
  LineBox,
  ListBox,
  Offset,
  Position,
  Size,
  SurroundBox,
  TextBox,
  ValueBox,
  ViewPort,
} from './screen'

test('Alignment', () => {
  expect(S.is(Alignment)('TopLeft')).toBeTrue()
  expect(S.is(Alignment)('TopCentre')).toBeTrue()
  expect(S.is(Alignment)('TopRight')).toBeTrue()
  expect(S.is(Alignment)('CentreLeft')).toBeTrue()
  expect(S.is(Alignment)('CentreCentre')).toBeTrue()
  expect(S.is(Alignment)('CentreRight')).toBeTrue()
  expect(S.is(Alignment)('BottomLeft')).toBeTrue()
  expect(S.is(Alignment)('BottomCentre')).toBeTrue()
  expect(S.is(Alignment)('BottomRight')).toBeTrue()
  expect(S.is(Alignment)('left')).toBeFalse()
  expect(S.is(Alignment)('right')).toBeFalse()
  expect(S.is(Alignment)('center')).toBeFalse()
  expect(S.is(Alignment)('justify')).toBeFalse()
  expect(S.is(Alignment)('foo')).toBeFalse()
})

test('Position', () => {
  expect(S.is(Position)({ xorigin: 0, yorigin: 0 })).toBeTrue()
  expect(S.is(Position)({})).toBeFalse()
  expect(S.is(Position)({ xorigin: 0 })).toBeFalse()
  expect(S.is(Position)({ yorigin: 0 })).toBeFalse()
})

test('Offset', () => {
  expect(S.is(Offset)({ xoffset: 0, yoffset: 0 })).toBeTrue()
  expect(S.is(Offset)({})).toBeFalse()
  expect(S.is(Offset)({ xoffset: 0 })).toBeFalse()
  expect(S.is(Offset)({ yoffset: 0 })).toBeFalse()
})

test('Size', () => {
  expect(S.is(Size)({ width: 0, height: 0 })).toBeTrue()
  expect(S.is(Size)({})).toBeFalse()
  expect(S.is(Size)({ width: 0 })).toBeFalse()
  expect(S.is(Size)({ height: 0 })).toBeFalse()
})

test('Anchor', () => {
  const valid: Anchor = {
    xorigin: 0,
    yorigin: 0,
  }

  expect(S.is(Anchor)(valid)).toBeTrue()
  expect(S.is(Anchor)({ ...valid, alignment: one(Alignment) })).toBeTrue()
  expect(S.is(Anchor)({})).toBeFalse()
})

test('Box', () => {
  expect(S.is(Box)({ width: 0, height: 0, xorigin: 0, yorigin: 0 })).toBeTrue()
  expect(S.is(Box)({})).toBeFalse()
})

test('ViewPort', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    alignment: 'TopLeft',
  }

  expect(S.is(ViewPort)(valid)).toBeTrue()
  expect(S.is(ViewPort)({ ...valid, FitChildren: true })).toBeTrue()
  expect(S.is(ViewPort)({})).toBeFalse()
})

test('Image', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    alignment: 'TopLeft',
  }

  expect(S.is(Image)(valid)).toBeTrue()
  expect(S.is(Image)({ ...valid, noclip: true })).toBeTrue()
  expect(S.is(Image)({})).toBeFalse()
})

test('LineBox', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    drawbox: true,
    linespacer: 0,
    linesize: 0,
  }

  expect(S.is(LineBox)(valid)).toBeTrue()
  expect(S.is(LineBox)({})).toBeFalse()
})

test('ListBox', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    drawbox: true,
    linespacer: 0,
    linesize: 0,
    gridstep: 0,
    edgespacer: 0,
    columnwidths: [{ width: 0 }],
  }

  expect(S.is(ListBox)(valid)).toBeTrue()
  expect(S.is(ListBox)({})).toBeFalse()
})

test('SurroundBox', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    gridstep: 12,
    drawbox: true,
    alignment: 'TopLeft',
  }

  expect(S.is(SurroundBox)(valid)).toBeTrue()
  expect(S.is(SurroundBox)({})).toBeFalse()
})

test('TextBox', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    drawbox: true,
    linespacer: 0,
    linesize: 0,
  }

  expect(S.is(TextBox)(valid)).toBeTrue()
  expect(S.is(TextBox)({ ...valid, edgespace: 1 })).toBeTrue()
  expect(S.is(TextBox)({ ...valid, edgespacer: 1 })).toBeTrue()
  expect(S.is(TextBox)({ ...valid, multiline: true })).toBeTrue()
  expect(S.is(TextBox)({ ...valid, autoscroll: true })).toBeTrue()
  expect(S.is(TextBox)({})).toBeFalse()
})

test('ValueBox', () => {
  const valid = {
    width: 0,
    height: 0,
    xorigin: 0,
    yorigin: 0,
    widthleft: 1,
    widthright: 1,
    edgespacer: 1,
  }

  expect(S.is(ValueBox)(valid)).toBeTrue()
  expect(S.is(ValueBox)({})).toBeFalse()
})
