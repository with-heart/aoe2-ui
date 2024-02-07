'use client'

import {
  blankBottomPanel,
  blankTopPanel,
  commandPanel,
  mapPanel,
  menuPanel,
  resourcePanel,
  scorePanel,
  technologyProgressPanel,
} from './panels'
import { Panel } from '@/types/panel'
import { Widget } from '@/types/widget'
import {
  isAnchorWidget,
  isMapViewWidget,
  isTechTreeButtonWidget,
} from '@/widget'
import { useState } from 'react'
import { calculatePosition } from './position'

const DEBUG = false

const Widget = ({ widget, depth = 1 }: { widget: Widget; depth?: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  if (
    isAnchorWidget(widget) ||
    isTechTreeButtonWidget(widget) ||
    !widget.ViewPort
  ) {
    console.log('non-viewport widgets not yet supported')
    return null
  }

  if (isMapViewWidget(widget)) {
    console.log('MapView widget not yet supported')
    return null
  }

  const { x, y } = calculatePosition(widget.ViewPort)
  const fill = `#${555 + depth * 2 * 111}`

  return (
    <svg
      x={x}
      y={y}
      width={widget.ViewPort.width}
      height={widget.ViewPort.height}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <rect
        width="100%"
        height="100%"
        fill={fill}
        strokeWidth={isHovered ? 5 : 0}
        stroke="blue"
      />

      {widget.ChildWidgets?.map((child, i) => (
        <Widget key={i} widget={child.Widget} depth={depth + 1} />
      ))}
    </svg>
  )
}

const Panel = ({ panel }: { panel: Panel }) => {
  const { x, y } = calculatePosition(panel.Collection.ViewPort)

  return (
    <svg
      x={x}
      y={y}
      width={panel.Collection.ViewPort.width}
      height={panel.Collection.ViewPort.height}
    >
      {DEBUG && <rect width="100%" height="100%" fill="#444" />}

      {panel.Collection.Widgets.map((widget, i) => (
        <Widget key={i} widget={widget.Widget} />
      ))}
    </svg>
  )
}

export function Svg() {
  return (
    <svg viewBox="0 0 3840 2160">
      <Panel panel={blankBottomPanel} />
      <Panel panel={blankTopPanel} />
      <Panel panel={scorePanel} />
      <Panel panel={technologyProgressPanel} />
      <Panel panel={commandPanel} />
      <Panel panel={menuPanel} />
      <Panel panel={resourcePanel} />
      <Panel panel={mapPanel} />
    </svg>
  )
}
