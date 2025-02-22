import { Metadata } from 'next'
import { headers } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Breadcrumbs } from './components/navigation/Breadcrumbs'
import { HeaderWithFooter } from './components/surfaces/HeaderWithFooter'
import { CookieBanner } from './components/surfaces/CookieBanner'
import { AnalyticsWrapper } from './components/analytics/AnalyticsWrapper'
import './globals.css'
import { AnalyticsProvider } from './components/analytics/AnalyticsContext'
import { ephesis, josefinSans } from './fonts'

export const metadata: Metadata = {
  title: 'Kliniken för estetisk bröstförstoring och bröstlyft',
  description:
    'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
  openGraph: {
    title: 'Kliniken för estetisk bröstförstoring och bröstlyft',
    description:
      'Dr Örjan Gribbes nya klinik i Stockholm är specialiserad på estetiska bröstoperationer, såsom bröstförstoringar, bröstförminskningar och bröstlyft.',
    url: 'https://www.drgribbe.se/',
    siteName: 'Dr Gribbe'
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
          <AnalyticsProvider>
            <HeaderWithFooter />
            <main className="mb-36 flex flex-col lg:mt-20 lg:mb-0">
              <Breadcrumbs />
              {children}
              <CookieBanner />
              <AnalyticsWrapper nonce={nonce} />
            </main>
          </AnalyticsProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
