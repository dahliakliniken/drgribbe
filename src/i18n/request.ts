import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = 'sv'
  const baseMessages = (await import(`../messages/${locale}.json`)).default
  const tackMessages = (await import(`../messages/tack/${locale}.json`)).default

  return {
    locale,
    messages: {
      ...baseMessages,
      tack: tackMessages
    }
  }
})
