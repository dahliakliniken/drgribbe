import { useMessages, useTranslations } from 'next-intl'

import { Pillar } from '../components/layout/Pillar'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import PriceList from '../components/surfaces/PriceList'
import { H1 } from '../components/typography/H1'
import { useAccordionItems } from './accordionData'

const procedureKeys = Array.from({ length: 18 }, (_, i) => `procedure${i + 1}`)

const Priser = () => {
  const t = useTranslations()
  const messages = useMessages()
  const [pricesItems] = useAccordionItems()

  const priceListKeys = Object.keys(messages.priceList)

  const items = priceListKeys.map((key) => {
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
      <SpaceContainer>
        <Pillar>
          <H1>{t('priser.title')}</H1>
          <Accordion size="h2" outLine items={pricesItems} />
          <SpaceContainer noPadding spaceTop>
            <PriceList items={items} />
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>
    </>
  )
}

export default Priser
