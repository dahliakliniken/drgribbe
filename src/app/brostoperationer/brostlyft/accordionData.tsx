import { useTranslations } from 'next-intl'

import { A } from '@/components/typography/A'
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
      title: t('question2.question'),
      content: (
        <P small>
          {t.rich('question2.answer', {
            link: (chunks) => (
              <A href="/brostoperationer#forberedelser">{chunks}</A>
            )
          })}
        </P>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('question23.question'),
      content: <P small>{t('question23.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question30.question'),
      content: <P small>{t('question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
