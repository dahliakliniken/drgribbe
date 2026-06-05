export const DESKTOP_QUERY = '(min-width: 1024px)'

export const BOTTOM_SCROLL_THRESHOLD_PX = 8
export const HEADER_COLLAPSED_HEIGHT_PX = 80
export const HEADER_EXPANDED_HEIGHT_PX = 208

const FIREFOX_IOS_BOTTOM_INSET_PX = 72

export const isFirefoxIOS = () =>
  typeof navigator !== 'undefined' && /FxiOS/i.test(navigator.userAgent)

export const getMobileBottomInset = (): number => {
  if (typeof window === 'undefined') {
    return 0
  }

  const isDesktop = window.matchMedia(DESKTOP_QUERY).matches

  if (isDesktop) {
    return 0
  }

  if (isFirefoxIOS()) {
    return FIREFOX_IOS_BOTTOM_INSET_PX
  }

  const visualViewport = window.visualViewport

  if (!visualViewport) {
    return 0
  }

  const offset =
    window.innerHeight - visualViewport.height - visualViewport.offsetTop

  return Math.max(0, offset)
}
