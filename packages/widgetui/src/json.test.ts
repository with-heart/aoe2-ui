import * as S from '@effect/schema/Schema'
import { expect, test } from 'bun:test'
import { Materials, Panel } from 'schema'
import gamemsgpanel from '../json/GameMsgPanel.json'
import gamenotificationpanel from '../json/GameNotificationPanel.json'
import blankbottompanel from '../json/blankbottompanel.json'
import blanktoppanel from '../json/blanktoppanel.json'
import commandpanel from '../json/commandpanel.json'
import mappanel from '../json/mappanel.json'
import materials from '../json/materials.json'
import menupanel from '../json/menupanel.json'
import notificationpanel from '../json/notificationpanel.json'
import resourcepanel from '../json/resourcepanel.json'
import scorepanel from '../json/scorepanel.json'
import technologyprogresspanel from '../json/technologyprogresspanel.json'
import worldtimerpanel from '../json/worldtimerpanel.json'

const decodePanel = S.decodeUnknownSync(Panel, { onExcessProperty: 'error' })

test('blankbottompanel.json', () => {
  expect(() => decodePanel(blankbottompanel)).not.toThrow()
})

test('blanktoppanel.json', () => {
  expect(() => decodePanel(blanktoppanel)).not.toThrow()
})

test('commandpanel.json', () => {
  expect(() => decodePanel(commandpanel)).not.toThrow()
})

test('GameMsgPanel.json', () => {
  expect(() => decodePanel(gamemsgpanel)).not.toThrow()
})

test('GameNotificationPanel.json', () => {
  expect(() => decodePanel(gamenotificationpanel)).not.toThrow()
})

test('mappanel.json', () => {
  expect(() => decodePanel(mappanel)).not.toThrow()
})

test('materials.json', () => {
  expect(() => S.decodeUnknownSync(Materials)(materials)).not.toThrow()
})

test('menupanel.json', () => {
  expect(() => decodePanel(menupanel)).not.toThrow()
})

test('notificationpanel.json', () => {
  expect(() => decodePanel(notificationpanel)).not.toThrow()
})

test('resourcepanel.json', () => {
  expect(() => decodePanel(resourcepanel)).not.toThrow()
})

test('scorepanel.json', () => {
  expect(() => decodePanel(scorepanel)).not.toThrow()
})

test('technologyprogresspanel.json', () => {
  expect(() => decodePanel(technologyprogresspanel)).not.toThrow()
})

test('worldtimerpanel.json', () => {
  expect(() => decodePanel(worldtimerpanel)).not.toThrow()
})
