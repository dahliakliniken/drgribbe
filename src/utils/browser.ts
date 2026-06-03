import { useSyncExternalStore } from 'react'

export const isFirefoxIOS = () =>
  typeof navigator !== 'undefined' && /FxiOS/i.test(navigator.userAgent)

const subscribe = () => () => {}

export const useFirefoxIOS = () =>
  useSyncExternalStore(subscribe, isFirefoxIOS, () => false)
