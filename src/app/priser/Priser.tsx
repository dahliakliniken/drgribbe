import { useMessages, useTranslations } from 'next-intl'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import PriceList from '../components/surfaces/PriceList'
import { H1 } from '../components/typography/H1'
import { Pillar } from '../components/layout/Pillar'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { BgColors } from '../types'
import { P } from '../components/typography/P'
import { H2 } from '../components/typography/H2'
import { Ul } from '../components/surfaces/Ul'
import { Li } from '../components/surfaces/Li'
import { Phone } from 'lucide-react'

const Priser = () => {
  const t = useTranslations()
  const messages = useMessages()
  const priceListKeys = Object.keys(messages.priceList)

  const items = priceListKeys.map((key) => {
    const procedureKeys = [
      'procedure1',
      'procedure2',
      'procedure3',
      'procedure4',
      'procedure5',
      'procedure6',
      'procedure7',
      'procedure8',
      'procedure9',
      'procedure10',
      'procedure11',
      'procedure12',
      'procedure13',
      'procedure14',
      'procedure15',
      'procedure16',
      'procedure17',
      'procedure18'
    ]

    const procedures = procedureKeys
      .filter((textKey) => t.has(`priceList.${key}.${textKey}`))
      .map((textKey) => {
        return {
          name: t(`priceList.${key}.${textKey}.name`),
          price: t(`priceList.${key}.${textKey}.price`),
          link: t.has(`priceList.${key}.${textKey}.link`)
            ? t(`priceList.${key}.${textKey}.link`)
            : undefined
        }
      })

    return {
      title: t(`priceList.${key}.title`),
      price: t.has(`priceList.${key}.price`)
        ? t(`priceList.${key}.price`)
        : undefined,
      procedures
    }
  })

  return (
    <>
      <SpaceContainer spaceVertically>
        <Pillar>
          <H1>{t('priser.title')}</H1>
          <PriceList items={items} />
        </Pillar>
      </SpaceContainer>

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{t('priser.paymentRules.heading')}</H2>
            <Ul white className="mb-4">
              <Li>{t('priser.paymentRules.text1')}</Li>
              <Li>{t('priser.paymentRules.text2')}</Li>
            </Ul>
            <P white>{t('priser.paymentRules.text3')}</P>

            <SpaceContainer spaceVertically noPadding>
              <H2 white>{t('priser.cancellationRules.heading')}</H2>
              <P white>{t('priser.cancellationRules.text1')}</P>
              <P white>{t('priser.cancellationRules.text2')}</P>
              <div className="mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5" color="#fff" />
                <P white>
                  <strong>{t('priser.cancellationRules.text3')}</strong>
                </P>
              </div>

              <P white>{t('priser.cancellationRules.text4')}</P>
              <Ul white>
                <Li>{t('priser.cancellationRules.text5')}</Li>
                <Li>{t('priser.cancellationRules.text6')}</Li>
              </Ul>
            </SpaceContainer>

            <SpaceContainer spaceVertically noPadding>
              <H2 white>{t('priser.financing.heading')}</H2>
              <P white>{t('priser.financing.text1')}</P>
              <P white className="italic">
                {t('priser.financing.text2')}
              </P>
            </SpaceContainer>
          </Pillar>
        }
      />
    </>
  )
}

export default Priser
