import { GoogleTagManager } from '@next/third-parties/google'

export const ConditionalGTM = ({ nonce }: { nonce: string }) => {
  return (
    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} nonce={nonce} />
  )
}
