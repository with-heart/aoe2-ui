'use client'

import { useState } from 'react'
import {
  isAnchorWidget,
  isMapViewWidget,
  isTechTreeButtonWidget,
  type Panel,
  type Widget,
} from 'schema'
import { calculateViewport } from '../viewport'

const DEBUG = false

const WidgetSvg = ({
  widget,
  depth = 1,
}: {
  widget: Widget
  depth?: number
}) => {
  const [isHovered, setIsHovered] = useState(false)

  if (isAnchorWidget(widget)) {
    return (
      <svg x={widget.Anchor.xorigin} y={widget.Anchor.yorigin}>
        {widget.ChildWidgets?.map((child, i) => (
          <WidgetSvg key={i} widget={child.Widget} depth={depth} />
        ))}
      </svg>
    )
  }

  if (isTechTreeButtonWidget(widget) || !widget.ViewPort) {
    console.log('non-viewport widgets not yet supported')
    return null
  }

  if (isMapViewWidget(widget)) {
    console.log('MapView widget not yet supported')
    return null
  }

  const { x, y } = calculateViewport(widget.ViewPort)
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
        <WidgetSvg key={i} widget={child.Widget} depth={depth + 1} />
      ))}
    </svg>
  )
}

const PanelSvg = ({ panel }: { panel: Panel }) => {
  const { x, y } = calculateViewport(panel.Collection.ViewPort)

  return (
    <svg
      x={x}
      y={y}
      width={panel.Collection.ViewPort.width}
      height={panel.Collection.ViewPort.height}
    >
      {panel.Collection.Widgets.map((widget, i) => (
        <WidgetSvg key={i} widget={widget.Widget} />
      ))}
    </svg>
  )
}

export function Svg({ panels }: { panels: Panel[] }) {
  return (
    <svg viewBox="0 0 3840 2160">
      {panels.map((panel) => (
        <PanelSvg key={panel.Collection.Name} panel={panel} />
      ))}
      {DEBUG &&
        panels.map((panel) => {
          const { x, y } = calculateViewport(panel.Collection.ViewPort)

          return (
            <>
              <rect
                key={`debug-rect-${panel.Collection.Name}`}
                x={x}
                y={y}
                width={panel.Collection.ViewPort.width}
                height={panel.Collection.ViewPort.height}
                fill="none"
                stroke="red"
                strokeWidth={5}
              />
              <text
                key={`debug-text-${panel.Collection.Name}`}
                x={x}
                y={y + 70}
                fontSize={80}
                fill="red"
              >
                {panel.Collection.Name}
              </text>
            </>
          )
        })}
    </svg>
  )
}
