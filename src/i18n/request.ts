import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
  const locale = 'sv'

  return {
    locale,
    messages: (await import(`../messages/generated/${locale}.json`)).default
  }
})
