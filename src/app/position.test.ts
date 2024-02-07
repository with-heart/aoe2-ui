import { Viewport } from '@/types/screen'
import { describe, expect, test } from 'vitest'
import { calculatePosition } from './position'

describe('calculatePosition', () => {
  const viewport: Omit<Viewport, 'alignment'> = {
    xorigin: 250,
    yorigin: 300,
    width: 50,
    height: 100,
  }

  test('BottomCentre', () => {
    expect(
      calculatePosition({ ...viewport, alignment: 'BottomCentre' }),
    ).toEqual({
      x: 225,
      y: 200,
    })
  })

  test('BottomLeft', () => {
    expect(calculatePosition({ ...viewport, alignment: 'BottomLeft' })).toEqual(
      {
        x: 250,
        y: 200,
      },
    )
  })

  test('BottomRight', () => {
    expect(
      calculatePosition({ ...viewport, alignment: 'BottomRight' }),
    ).toEqual({
      x: 200,
      y: 200,
    })
  })

  test('CentreCentre', () => {
    expect(
      calculatePosition({ ...viewport, alignment: 'CentreCentre' }),
    ).toEqual({
      x: 225,
      y: 250,
    })
  })

  test('CentreLeft', () => {
    expect(calculatePosition({ ...viewport, alignment: 'CentreLeft' })).toEqual(
      {
        x: 250,
        y: 250,
      },
    )
  })

  test('CentreRight', () => {
    expect(
      calculatePosition({ ...viewport, alignment: 'CentreRight' }),
    ).toEqual({
      x: 200,
      y: 250,
    })
  })

  test('TopCentre', () => {
    expect(calculatePosition({ ...viewport, alignment: 'TopCentre' })).toEqual({
      x: 225,
      y: 300,
    })
  })

  test('TopLeft', () => {
    expect(calculatePosition({ ...viewport, alignment: 'TopLeft' })).toEqual({
      x: 250,
      y: 300,
    })
  })

  test('TopRight', () => {
    expect(calculatePosition({ ...viewport, alignment: 'TopRight' })).toEqual({
      x: 200,
      y: 300,
    })
  })
})
