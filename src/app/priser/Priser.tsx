import { useMessages, useTranslations } from 'next-intl'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import PriceList from '../components/surfaces/PriceList'
import { H1 } from '../components/typography/H1'
import { Pillar } from '../components/layout/Pillar'

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
      'procedure18',

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
    <SpaceContainer spaceVertically>
      <Pillar>
        <H1>{t('priser.title')}</H1>
        <PriceList items={items} />
      </Pillar>
    </SpaceContainer>
  )
}

export default Priser
