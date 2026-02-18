import { useTranslations } from 'next-intl'

import { P } from '@/components/typography/P'

export const usePolicyAccordionItems = () => {
  const t = useTranslations('personuppgiftspolicy.page.accordions')
  const rightsItems = [
    {
      id: crypto.randomUUID(),
      title: t('rights.question1.question'),
      content: <P small>{t('rights.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question2.question'),
      content: <P small>{t('rights.question2.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question3.question'),
      content: <P small>{t('rights.question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question4.question'),
      content: <P small>{t('rights.question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question5.question'),
      content: <P small>{t('rights.question5.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question6.question'),
      content: <P small>{t('rights.question6.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question7.question'),
      content: <P small>{t('rights.question7.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question8.question'),
      content: <P small>{t('rights.question8.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('rights.question9.question'),
      content: (
        <div>
          <P small>{t('customContent.rightsQuestion9.intro')}</P>
          <ul>
            <li>
              <P>{t('customContent.rightsQuestion9.item1Title')}</P>
              <P small>{t('customContent.rightsQuestion9.item1Text')}</P>
              <p></p>
            </li>
            <li>
              <P>{t('customContent.rightsQuestion9.item2Title')}</P>
              <P small>{t('customContent.rightsQuestion9.item2Text')}</P>
              <p></p>
            </li>
            <li>
              <P>{t('customContent.rightsQuestion9.item3Title')}</P>
              <P small>{t('customContent.rightsQuestion9.item3Text')}</P>
              <p></p>
            </li>
            <li>
              <P>{t('customContent.rightsQuestion9.item4Title')}</P>
              <P small>{t('customContent.rightsQuestion9.item4Text')}</P>
              <p></p>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const policyItems = [
    {
      id: crypto.randomUUID(),
      title: t('policy.question1.question'),
      content: <P small>{t('policy.question1.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policy.question2.question'),
      content: <P small>{t('policy.question2.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policy.question3.question'),
      content: <P small>{t('policy.question3.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policy.question4.question'),
      content: <P small>{t('policy.question4.answer')}</P>
    },
    {
      id: crypto.randomUUID(),
      title: t('policy.question5.question'),
      content: (
        <div>
          <P small>{t('customContent.policyQuestion5.intro')}</P>
          <ul>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet1')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet2')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet3')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet4')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet5')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet6')}</P>
            </li>
            <li>
              <P small>{t('customContent.policyQuestion5.bullet7')}</P>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('policy.question6.question'),
      content: <P small>{t('policy.question6.answer')}</P>
    }
  ]

  return [policyItems, rightsItems]
}
