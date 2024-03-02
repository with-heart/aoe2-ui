import { describe, expect, test } from 'bun:test'
import { ViewPort } from 'schema'
import { calculateViewport } from './viewport'

describe('calculateViewport', () => {
  const viewport: Omit<ViewPort, 'alignment'> = {
    xorigin: 250,
    yorigin: 300,
    width: 50,
    height: 100,
  }

  test('BottomCentre', () => {
    expect(
      calculateViewport({ ...viewport, alignment: 'BottomCentre' }),
    ).toEqual({
      x: 225,
      y: 200,
      width: 50,
      height: 100,
    })
  })

  test('BottomLeft', () => {
    expect(calculateViewport({ ...viewport, alignment: 'BottomLeft' })).toEqual(
      {
        x: 250,
        y: 200,
        width: 50,
        height: 100,
      },
    )
  })

  test('BottomRight', () => {
    expect(
      calculateViewport({ ...viewport, alignment: 'BottomRight' }),
    ).toEqual({
      x: 200,
      y: 200,
      width: 50,
      height: 100,
    })
  })

  test('CentreCentre', () => {
    expect(
      calculateViewport({ ...viewport, alignment: 'CentreCentre' }),
    ).toEqual({
      x: 225,
      y: 250,
      width: 50,
      height: 100,
    })
  })

  test('CentreLeft', () => {
    expect(calculateViewport({ ...viewport, alignment: 'CentreLeft' })).toEqual(
      {
        x: 250,
        y: 250,
        width: 50,
        height: 100,
      },
    )
  })

  test('CentreRight', () => {
    expect(
      calculateViewport({ ...viewport, alignment: 'CentreRight' }),
    ).toEqual({
      x: 200,
      y: 250,
      width: 50,
      height: 100,
    })
  })

  test('TopCentre', () => {
    expect(calculateViewport({ ...viewport, alignment: 'TopCentre' })).toEqual({
      x: 225,
      y: 300,
      width: 50,
      height: 100,
    })
  })

  test('TopLeft', () => {
    expect(calculateViewport({ ...viewport, alignment: 'TopLeft' })).toEqual({
      x: 250,
      y: 300,
      width: 50,
      height: 100,
    })
  })

  test('TopRight', () => {
    expect(calculateViewport({ ...viewport, alignment: 'TopRight' })).toEqual({
      x: 200,
      y: 300,
      width: 50,
      height: 100,
    })
  })
})
