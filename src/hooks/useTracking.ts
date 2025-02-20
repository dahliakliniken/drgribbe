'use client'

import type React from 'react'

import { useCallback } from 'react'
import { useAnalyticsEvent } from './useAnalyticsEvents'

export const useTracking = () => {
  const sendEvent = useAnalyticsEvent()

  const trackEvent = useCallback(
    (eventName: string, eventParams?: Record<string, any>) =>
      (e: React.SyntheticEvent) => {
        // Call the original event handler if it exists
        if (e.currentTarget && typeof e.currentTarget.onclick === 'function') {
          e.currentTarget.onclick(e)
        }

        // Send the analytics event
        sendEvent(eventName, {
          ...eventParams,
          page_location: window.location.pathname
        })
      },
    [sendEvent]
  )

  return trackEvent
}
