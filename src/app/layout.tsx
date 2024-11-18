import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'
import { Breadcrumbs } from './components/navigation/Breadcrumbs'
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
          <Breadcrumbs />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
