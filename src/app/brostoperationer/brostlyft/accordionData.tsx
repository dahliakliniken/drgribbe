import { useTranslations } from 'next-intl'

import { A } from '@/components/typography/A'
import { P } from '@/components/typography/P'

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
      title: ft('accordion.question2.question'),
      content: (
        <P small>
          {ft.rich('accordion.question2.answer', {
            link: (chunks) => (
              <A href="/brostoperationer#forberedelser">{chunks}</A>
            )
          })}
        </P>
      )
    },
    {
      id: crypto.randomUUID(),
      title: ft('accordion.question23.question'),
      content: <P small>{ft('accordion.question23.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: ft('accordion.question30.question'),
      content: <P small>{ft('accordion.question30.answer')}</P>
    }
  ]

  return [faqAccordion]
}
