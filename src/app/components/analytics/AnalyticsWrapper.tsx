'use client'

import { useAnalytics } from './AnalyticsContext'
import { ConditionalGTM } from './ConditionalGTM'

export const AnalyticsWrapper = ({ nonce }: { nonce?: string }) => {
  const { isAnalyticsEnabled } = useAnalytics()

  if (!nonce) {
    return null
  }

  if (isAnalyticsEnabled) {
    return <ConditionalGTM nonce={nonce} />
  }

  return null
}
