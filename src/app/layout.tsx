import './globals.css'

import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { Breadcrumbs } from './components/navigation/Breadcrumbs'
import { HeaderWithFooter } from './components/surfaces/HeaderWithFooter'
import { ephesis, josefinSans } from './fonts'

export const metadata: Metadata = {
  title: 'Kliniken för estetisk bröstförstoring och bröstlyft',
  description:
    'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
  openGraph: {
    title: 'Kliniken för estetisk bröstförstoring och bröstlyft',
    description:
      'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
    url: 'https://www.dahliakliniken.se/',
    siteName: 'Dahliakliniken'
  },
  twitter: {
    title: 'Kliniken för estetisk bröstförstoring och bröstlyft',
    description:
      'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.'
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()
  const nonce = (await headers()).get('x-nonce') || undefined

  return (
    <html
      lang={locale}
      className={`${josefinSans.variable} ${ephesis.variable} lg:bg-beige`}
    >
      <body className={josefinSans.className}>
        <NextIntlClientProvider messages={messages}>
          <HeaderWithFooter />
          <main className="mb-36 flex flex-col lg:mt-20 lg:mb-0">
            <Breadcrumbs />
            {children}
            <GoogleTagManager
              gtmId={process.env.NEXT_PUBLIC_GTM_ID!}
              nonce={nonce}
            />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
