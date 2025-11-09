import './globals.css'

import { GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import { BUSINESS_IMAGES, BUSINESS_NAME } from '@/data/businessData'

import { Breadcrumbs } from './components/navigation/Breadcrumbs'
import { HeaderWithFooter } from './components/surfaces/HeaderWithFooter'
import { JsonLd } from './components/surfaces/JsonLd'
import { ORG_ID, SITE_URL } from './config/site'
import { ephesis, josefinSans } from './fonts'

export const metadata: Metadata = {
  title:
    'Dahliakliniken – Expert på estetisk bröstförstoring och bröstlyft i Stockholm',
  description:
    'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
  openGraph: {
    title:
      'Dahliakliniken – Expert på estetisk bröstförstoring och bröstlyft i Stockholm',
    description:
      'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
    url: 'https://www.dahliakliniken.se/',
    siteName: 'Dahliakliniken',
    type: 'website',
    locale: 'sv_SE'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Dahliakliniken – Expert på estetisk bröstförstoring och bröstlyft i Stockholm',
    description:
      'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.'
  }
}

const org = {
  '@id': ORG_ID,
  '@type': 'Organization',
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: BUSINESS_IMAGES.logo }
}

const webSite = {
  '@id': `${SITE_URL}#website`,
  '@type': 'WebSite',
  url: SITE_URL,
  name: BUSINESS_NAME,
  publisher: { '@id': ORG_ID }
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
      <head>
        <JsonLd
          data={{ '@context': 'https://schema.org', '@graph': [org, webSite] }}
        />
      </head>
      <body className={josefinSans.className}>
        <GoogleTagManager
          gtmId={process.env.NEXT_PUBLIC_GTM_ID!}
          nonce={nonce}
        />
        <NextIntlClientProvider messages={messages}>
          <HeaderWithFooter />
          <main className="mb-52 flex flex-col lg:mt-20 lg:mb-0">
            <Breadcrumbs />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
