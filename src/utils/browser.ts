export const DESKTOP_QUERY = '(min-width: 1024px)'

export const BOTTOM_SCROLL_THRESHOLD_PX = 8
export const HEADER_COLLAPSED_HEIGHT_PX = 80
export const HEADER_EXPANDED_HEIGHT_PX = 208

const FIREFOX_IOS_BOTTOM_BAR_HEIGHT_PX = 72
const GENERIC_FLOATING_BAR_FALLBACK_PX = 72
const MIN_EXPECTED_FLOATING_BAR_OFFSET_PX = 24

export const isFirefoxIOS = () =>
  typeof navigator !== 'undefined' && /FxiOS/i.test(navigator.userAgent)

export const isMobileDevice = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(max-width: 1023px)').matches

export const getMobileBottomInset = (): number => {
  if (typeof window === 'undefined') {
    return 0
  }

  const isDesktop = window.matchMedia(DESKTOP_QUERY).matches

  if (isDesktop) {
    return 0
  }

  if (isFirefoxIOS()) {
    return FIREFOX_IOS_BOTTOM_BAR_HEIGHT_PX
  }

  const visualViewport = window.visualViewport

  if (!visualViewport) {
    return 0
  }

  const visualViewportOffset = Math.max(
    0,
    window.innerHeight - visualViewport.height - visualViewport.offsetTop
  )

  const viewportHeightDifference = window.innerHeight - visualViewport.height

  const needsGenericFallback =
    viewportHeightDifference > GENERIC_FLOATING_BAR_FALLBACK_PX &&
    visualViewportOffset < MIN_EXPECTED_FLOATING_BAR_OFFSET_PX

  if (needsGenericFallback) {
    return GENERIC_FLOATING_BAR_FALLBACK_PX
  }

  return visualViewportOffset
}
