import { useTranslations } from 'next-intl'

import { A } from '../components/typography/A'
import { P } from '../components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations('fragorOchSvar')
  return [
    {
      id: crypto.randomUUID(),
      title: t('accordion.question1.question'),
      content: <P small>{t('accordion.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question2.question'),
      content: (
        <P small>
          {t.rich('accordion.question2.answer', {
            link: (chunks) => (
              <A href="/brostoperationer#forberedelser">{chunks}</A>
            )
          })}
        </P>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question3.question'),
      content: <P small>{t('accordion.question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question4.question'),
      content: <P small>{t('accordion.question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question5.question'),
      content: <P small>{t('accordion.question5.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question6.question'),
      content: <P small>{t('accordion.question6.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question7.question'),
      content: <P small>{t('accordion.question7.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question8.question'),
      content: <P small>{t('accordion.question8.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question9.question'),
      content: <P small>{t('accordion.question9.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question10.question'),
      content: <P small>{t('accordion.question10.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question11.question'),
      content: <P small>{t('accordion.question11.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question12.question'),
      content: <P small>{t('accordion.question12.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question13.question'),
      content: <P small>{t('accordion.question13.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question14.question'),
      content: <P small>{t('accordion.question14.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question15.question'),
      content: <P small>{t('accordion.question15.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question16.question'),
      content: <P small>{t('accordion.question16.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question17.question'),
      content: <P small>{t('accordion.question17.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question18.question'),
      content: <P small>{t('accordion.question18.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question19.question'),
      content: <P small>{t('accordion.question19.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question20.question'),
      content: <P small>{t('accordion.question20.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question21.question'),
      content: <P small>{t('accordion.question21.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question22.question'),
      content: <P small>{t('accordion.question22.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question23.question'),
      content: <P small>{t('accordion.question23.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question24.question'),
      content: <P small>{t('accordion.question24.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question25.question'),
      content: <P small>{t('accordion.question25.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question26.question'),
      content: <P small>{t('accordion.question26.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question27.question'),
      content: <P small>{t('accordion.question27.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question28.question'),
      content: <P small>{t('accordion.question28.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('accordion.question29.question'),
      content: <P small>{t('accordion.question29.answer')}</P>
    }
  ]
}
