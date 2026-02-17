import { useTranslations } from 'next-intl'

import { A } from '@/components/typography/A'
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
      title: ft('question2.question'),
      content: (
        <P small>
          {ft.rich('question2.answer', {
            link: (chunks) => (
              <A href="/brostoperationer#forberedelser">{chunks}</A>
            )
          })}
        </P>
      )
    },
    {
      id: crypto.randomUUID(),
      title: ft('question23.question'),
      content: <P small>{ft('question23.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('question30.question'),
      content: <P small>{ft('question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
