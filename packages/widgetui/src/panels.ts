import * as S from '@effect/schema/Schema'
import { Panel } from 'schema'
import gameMessagePanel from '../json/GameMsgPanel.json'
import gameNotificationPanel from '../json/GameNotificationPanel.json'
import blankBottomPanel from '../json/blankbottompanel.json'
import blankTopPanel from '../json/blanktoppanel.json'
import commandPanel from '../json/commandpanel.json'
import mapPanel from '../json/mappanel.json'
import menuPanel from '../json/menupanel.json'
import notificationPanel from '../json/notificationpanel.json'
import resourcePanel from '../json/resourcepanel.json'
import scorePanel from '../json/scorepanel.json'
import technologyProgressPanel from '../json/technologyprogresspanel.json'
import worldTimerPanel from '../json/worldtimerpanel.json'

export const panels = [
  blankBottomPanel,
  blankTopPanel,
  commandPanel,
  gameMessagePanel,
  gameNotificationPanel,
  mapPanel,
  menuPanel,
  notificationPanel,
  resourcePanel,
  scorePanel,
  technologyProgressPanel,
  worldTimerPanel,
].map((panel) => S.decodeUnknownSync(Panel)(panel))
