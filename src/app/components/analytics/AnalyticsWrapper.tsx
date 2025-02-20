'use client'

import { useAnalytics } from './AnalyticsContext'
import { ConditionalGTM } from './ConditionalGTM'

export const AnalyticsWrapper = () => {
  const { isAnalyticsEnabled } = useAnalytics()

  if (isAnalyticsEnabled) {
    return <ConditionalGTM />
  }

  return null
}
