import { UI_HEIGHT, UI_WIDTH } from '@/constants'

export default function TestPage() {
  return (
    <svg id="ui" className="debug" viewBox={`0 0 ${UI_WIDTH} ${UI_HEIGHT}`}>
      <defs>
        <svg
          id="BlankBottomPanel"
          className="panel"
          width={3840}
          height={73}
          y={2160 - 73}
        >
          <rect className="container" />
        </svg>

        <svg
          id="BlankBottomPanel.Base"
          className="widget"
          width={3840}
          height={73}
          y={2160 - 73}
        >
          <rect className="container" />
          <rect
            width={3840}
            height={73}
            fill="url(#BlankBottomPanel.Base.texture)"
          />

          <defs>
            <pattern
              id="BlankBottomPanel.Base.texture"
              patternUnits="userSpaceOnUse"
              width={3840 / 2}
              height={73}
            >
              <image href="/textures/ingame/panels/ASIA/bottombar.png" />
            </pattern>
          </defs>
        </svg>

        <svg
          id="MapPanel"
          className="panel"
          x={3839 - 1940}
          y={2159 - 413}
          width={1940}
          height={413}
        >
          <rect className="container" />
        </svg>

        <svg
          id="MapPanel.Background"
          className="widget"
          width={860}
          height={413}
          x={3839 - 1940 + 1080}
          y={2159 - 413}
        >
          <rect className="container" />
          <use href="#MapPanel.Background.Image" />

          <defs>
            <svg id="MapPanel.Background.Image" width={860} height={413}>
              <rect
                className="texture fill"
                fill="url(#MapPanel.Background.Image.texture)"
              />
            </svg>

            <pattern
              id="MapPanel.Background.Image.texture"
              patternUnits="userSpaceOnUse"
              width={860}
              height={413}
            >
              <image href="/textures/ingame/panels/ASIA/map-panel.png" />
            </pattern>
          </defs>
        </svg>

        <svg
          id="MapPanel.Background.ButtonFlare"
          className="widget"
          width={69}
          height={69}
          x={3839 - 1940 + 1080 + 185 - 69 / 2}
          y={2159 - 413 + 129 - 69 / 2}
        >
          <rect className="container" />
          <use href="#MapPanel.Background.ButtonFlare.Image" />

          <defs>
            <svg
              id="MapPanel.Background.ButtonFlare.Image"
              width={74}
              height={74}
              x={(69 - 74) / 2}
              y={(69 - 74) / 2}
            >
              <rect
                className="texture fill"
                fill="url(#MapPanel.Background.ButtonFlare.Image.texture)"
              />
            </svg>

            <pattern
              id="MapPanel.Background.ButtonFlare.Image.texture"
              patternUnits="userSpaceOnUse"
              width={74}
              height={74}
            >
              <image href="/textures/ingame/icons/minimap_flare_normal.png" />
            </pattern>
          </defs>
        </svg>
      </defs>

      <use href="#BlankBottomPanel" />
      <use href="#BlankBottomPanel.Base" />
      <use href="#BlankBottomPanel.Base.Image" />
      <use href="#MapPanel" />
      <use href="#MapPanel.Background" />
      <use href="#MapPanel.Background.ButtonFlare" />
    </svg>
  )
}
