import { Viewport } from '@/types/screen'

/**
 * Calculates the top left `x` and `y` positions of a given `Viewport`. Useful
 * for positioning a `Viewport` at the correct location on the screen (since
 * `svg`/`canvas` don't understand alignment).
 */
export function calculateViewport(viewport: Viewport): {
  x: number
  y: number
  width: number
  height: number
} {
  const { x, y } = positionFromAlignment()

  return {
    x,
    y,
    width: viewport.width,
    height: viewport.height,
  }

  function positionFromAlignment() {
    switch (viewport.alignment) {
      case 'BottomCentre':
        return {
          x: viewport.xorigin - viewport.width / 2,
          y: viewport.yorigin - viewport.height,
        }
      case 'BottomLeft':
        return {
          x: viewport.xorigin,
          y: viewport.yorigin - viewport.height,
        }
      case 'BottomRight':
        return {
          x: viewport.xorigin - viewport.width,
          y: viewport.yorigin - viewport.height,
        }
      case 'CentreCentre':
        return {
          x: viewport.xorigin - viewport.width / 2,
          y: viewport.yorigin - viewport.height / 2,
        }
      case 'CentreLeft':
        return {
          x: viewport.xorigin,
          y: viewport.yorigin - viewport.height / 2,
        }
      case 'CentreRight':
        return {
          x: viewport.xorigin - viewport.width,
          y: viewport.yorigin - viewport.height / 2,
        }
      case 'TopCentre':
        return {
          x: viewport.xorigin - viewport.width / 2,
          y: viewport.yorigin,
        }
      case 'TopLeft':
        return {
          x: viewport.xorigin,
          y: viewport.yorigin,
        }
      case 'TopRight':
        return {
          x: viewport.xorigin - viewport.width,
          y: viewport.yorigin,
        }
    }
  }
}
