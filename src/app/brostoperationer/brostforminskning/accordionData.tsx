import { useTranslations } from 'next-intl'

import { P } from '@/components/typography/P'

export const useAccordionData = () => {
  const ft = useTranslations('fragor-och-svar.page.faqAccordion')

  const faqAccordion = [
    {
      id: crypto.randomUUID(),
      title: ft('question1.question'),
      content: <P small>{ft('question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question21.question'),
      content: <P small>{ft('question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question30.question'),
      content: <P small>{ft('question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
