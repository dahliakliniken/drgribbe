'use client'

import { useAnalytics } from '@/app/components/analytics/AnalyticsContext'

declare global {
  interface Window {
    gtag: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, any>
    ) => void
  }
}

export const useAnalyticsEvent = () => {
  const { isAnalyticsEnabled } = useAnalytics()

  const sendEvent = (eventName: string, eventParams?: Record<string, any>) => {
    if (isAnalyticsEnabled && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  }

  return sendEvent
}
