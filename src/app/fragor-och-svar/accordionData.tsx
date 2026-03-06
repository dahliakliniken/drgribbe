import { useTranslations } from 'next-intl'

import { A } from '@/components/typography/A'
import { P } from '@/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations('fragor-och-svar.page.faqAccordion')
  return [
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
      title: t('question3.question'),
      content: <P small>{t('question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question4.question'),
      content: <P small>{t('question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question5.question'),
      content: <P small>{t('question5.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question6.question'),
      content: <P small>{t('question6.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question7.question'),
      content: <P small>{t('question7.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question8.question'),
      content: <P small>{t('question8.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question9.question'),
      content: <P small>{t('question9.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question10.question'),
      content: <P small>{t('question10.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question11.question'),
      content: <P small>{t('question11.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question12.question'),
      content: <P small>{t('question12.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question13.question'),
      content: <P small>{t('question13.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question14.question'),
      content: <P small>{t('question14.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question15.question'),
      content: <P small>{t('question15.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question16.question'),
      content: <P small>{t('question16.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question17.question'),
      content: <P small>{t('question17.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question18.question'),
      content: <P small>{t('question18.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question19.question'),
      content: <P small>{t('question19.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question20.question'),
      content: <P small>{t('question20.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question21.question'),
      content: <P small>{t('question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question22.question'),
      content: <P small>{t('question22.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question23.question'),
      content: <P small>{t('question23.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question24.question'),
      content: <P small>{t('question24.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question25.question'),
      content: <P small>{t('question25.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question26.question'),
      content: <P small>{t('question26.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question27.question'),
      content: <P small>{t('question27.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question28.question'),
      content: <P small>{t('question28.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question29.question'),
      content: <P small>{t('question29.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('question30.question'),
      content: <P small>{t('question30.answer')}</P>
    }
  ]
}
