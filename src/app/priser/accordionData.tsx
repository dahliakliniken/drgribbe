import { Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { P } from '@/app/components/typography/P'

import { Li } from '../components/surfaces/Li'
import { Ul } from '../components/surfaces/Ul'

export const useAccordionItems = () => {
  const t = useTranslations()
  const pricesItems = [
    {
      id: crypto.randomUUID(),
      title: t('priser.paymentRules.heading'),
      content: (
        <>
          <P small>{t('priser.paymentRules.text1')}</P>
          <P small>{t('priser.paymentRules.text2')}</P>
          <P small>{t('priser.paymentRules.text3')}</P>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('priser.cancellationRules.heading'),
      content: (
        <>
          <P small>{t('priser.cancellationRules.text1')}</P>
          <P small>{t('priser.cancellationRules.text2')}</P>
          <P small className="mb-4 flex items-center gap-2 italic">
            <Phone className="h-5 w-5" />
            {t('priser.cancellationRules.text3')}
          </P>
          <P small>{t('priser.cancellationRules.text4')}</P>
          <Ul>
            <Li small>{t('priser.cancellationRules.text5')}</Li>
            <Li small>{t('priser.cancellationRules.text6')}</Li>
          </Ul>
        </>
      )
    },
    {
      id: crypto.randomUUID(),
      title: t('priser.financing.heading'),
      content: (
        <>
          <P small>{t('priser.financing.text1')}</P>
          <P small className="italic">
            {t('priser.financing.text2')}
          </P>
        </>
      )
    }
  ]

  return [pricesItems]
}
