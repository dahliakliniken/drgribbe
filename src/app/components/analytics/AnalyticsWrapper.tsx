'use client'

import { useAnalytics } from './AnalyticsContext'
import { ConditionalGA } from './ConditionalGA'

export const AnalyticsWrapper = () => {
  const { isAnalyticsEnabled } = useAnalytics()

  if (isAnalyticsEnabled) {
    return <ConditionalGA />
  }

  return null
}
