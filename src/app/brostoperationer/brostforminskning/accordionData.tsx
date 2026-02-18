import { useTranslations } from 'next-intl'

import { P } from '@/components/typography/P'

export const useAccordionData = () => {
  const t = useTranslations('fragor-och-svar.page.faqAccordion')

  const faqAccordion = [
    {
      id: crypto.randomUUID(),
      title: t('question1.question'),
      content: <P small>{t('question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question21.question'),
      content: <P small>{t('question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question30.question'),
      content: <P small>{t('question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
