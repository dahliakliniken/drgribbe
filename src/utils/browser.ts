export const isFirefoxIOS = () =>
  typeof navigator !== 'undefined' && /FxiOS/i.test(navigator.userAgent)
