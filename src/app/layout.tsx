import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'
import Breadcrumb from './components/navigation/Breadcrumbs'
export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* <Breadcrumb /> */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
