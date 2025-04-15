import { useTranslations } from 'next-intl'

import { P } from '@/app/components/typography/P'

export const useAccordionData = () => {
  const ft = useTranslations('fragorOchSvar')

  const faqAccordion = [
    {
      id: crypto.randomUUID(),
      title: ft('accordion.question1.question'),
      content: <P small>{ft('accordion.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('accordion.question21.question'),
      content: <P small>{ft('accordion.question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('accordion.question30.question'),
      content: <P small>{ft('accordion.question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
