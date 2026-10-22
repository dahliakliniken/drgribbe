import { useTranslations } from 'next-intl'

import { Li } from '@/components/surfaces/Li'
import { Ul } from '@/components/surfaces/Ul'
import { P } from '@/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations('priser.page')
  const pricesItems = [
    {
      id: crypto.randomUUID(),
      title: t('paymentRules.heading'),
      content: (
        <Ul>
          <Li small>{t('paymentRules.text1')}</Li>
          <Li small>{t('paymentRules.text2')}</Li>
          <Li small>{t('paymentRules.text3')}</Li>
          <Li small>{t('paymentRules.text4')}</Li>
        </Ul>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('cancellationRules.heading'),
      content: (
        <>
          <P small>{t('cancellationRules.text1')}</P>
          <P small>{t('cancellationRules.text2')}</P>
          <Ul>
            <Li small>{t('cancellationRules.text3')}</Li>
            <Li small>{t('cancellationRules.text4')}</Li>
            <Li small>{t('cancellationRules.text5')}</Li>
            <Li small>{t('cancellationRules.text6')}</Li>
            <Li small>{t('cancellationRules.text7')}</Li>
            <Li small>{t('cancellationRules.text8')}</Li>
          </Ul>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('financing.heading'),
      content: (
        <>
          <P small>{t('financing.text1')}</P>
          <P small className="italic">
            {t('financing.text2')}
          </P>
        </>
      )
    }
  ]

  return [pricesItems]
}
