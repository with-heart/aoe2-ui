'use client'

import { UI_HEIGHT, UI_WIDTH } from '@/constants'
import textureByName from '@/textures.json'
import type { Texture, Viewport } from '@/types'
import * as WidgetUI from 'widgetui/schema'
import { useElement, useIds, useViewport } from './ui.actor'

const IS_DEBUG = false

export function UI() {
  const ids = useIds()

  return (
    <svg
      id="ui"
      className={IS_DEBUG ? 'debug' : undefined}
      viewBox={`0 0 ${UI_WIDTH} ${UI_HEIGHT}`}
    >
      <defs>
        {Object.entries(textureByName).map(([name, texture]) => (
          <TexturePattern key={name} id={name} texture={texture} />
        ))}
      </defs>
      <defs>
        {ids.map((id) => (
          <ElementDef key={id} id={id} />
        ))}
      </defs>
      {ids.map((id) => (
        <Use key={id} id={id} />
      ))}
    </svg>
  )
}

function Use({ id }: { id: string }) {
  return <use href={`#${id}`} />
}

function ElementDef({ id }: { id: string }) {
  const element = useElement(id)
  return WidgetUI.isCollection(element) ?
      <Panel collection={element} id={id} />
    : <Widget widget={element} id={id} />
}

function Panel({
  collection,
  id,
}: {
  collection: WidgetUI.Collection
  id: string
}) {
  const viewport = useViewport(collection)!
  return (
    <svg id={id} className="panel" {...viewport}>
      <rect className="container fill" />
    </svg>
  )
}

function Widget({ widget, id }: { widget: WidgetUI.Widget; id: string }) {
  const viewport = useViewport(widget)

  if (!viewport) {
    return undefined
  }

  const normalState = getNormalState(widget.StateMaterials)
  const texture = textureByName[normalState ?? 'invalid']

  if (!normalState || !texture) {
    return (
      <svg id={id} className="widget" {...viewport}>
        <rect className="container fill" />
      </svg>
    )
  }

  return (
    <svg id={id} className="widget" {...viewport}>
      <rect className="container fill" />
      <Use id={`${id}.Image`} />

      {texture && (
        <defs>
          <TextureImage
            id={`${id}.Image`}
            name={normalState}
            texture={texture}
            viewport={viewport}
          />
        </defs>
      )}
    </svg>
  )
}

function TextureImage({
  id,
  name,
  texture,
  viewport,
}: {
  id: string
  name: string
  texture: Texture
  viewport: Viewport
}) {
  if (texture.width > viewport.width || texture.height > viewport.height) {
    return (
      <svg
        id={id}
        x={(viewport.width - texture.width) / 2}
        y={(viewport.height - texture.height) / 2}
      >
        <rect className="texture fill" fill={`url(#${name})`} />
      </svg>
    )
  }

  if (texture.width < viewport.width && texture.height < viewport.height) {
    return (
      <svg
        id={id}
        x={(viewport.width - texture.width) / 2}
        y={(viewport.height - texture.height) / 2}
      >
        <rect
          width={texture.width}
          height={texture.height}
          className="texture"
          fill={`url(#${name})`}
        />
      </svg>
    )
  }

  return (
    <svg id={id}>
      <rect className="texture fill" fill={`url(#${name})`} />
    </svg>
  )
}

function getNormalState(stateMaterials?: WidgetUI.StateMaterials) {
  if (!stateMaterials) return undefined

  return (
    WidgetUI.isUserStates(stateMaterials) ?
      stateMaterials['UserState0']
    : stateMaterials['StateNormal'])?.Material
}

function TexturePattern({
  id,
  texture: { href, width, height },
}: {
  id: string
  texture: Texture
}) {
  return (
    <pattern
      id={id}
      patternUnits="userSpaceOnUse"
      width={width}
      height={height}
    >
      <image href={href} />
    </pattern>
  )
}
