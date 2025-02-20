'use client'

import { GoogleTagManager } from '@next/third-parties/google'

export const ConditionalGTM = () => {
  return <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
}
