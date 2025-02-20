'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

export const ConditionalGA = () => {
  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
}
