import { useMessages, useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import PriceList from '@/components/surfaces/PriceList'
import { H1 } from '@/components/typography/H1'

import { useAccordionItems } from './accordionData'

const procedureKeys = Array.from({ length: 18 }, (_, i) => `procedure${i + 1}`)

const Priser = () => {
  const t = useTranslations('priser.page')
  const tPriceList = useTranslations('price-list')
  const messages = useMessages() as Record<string, Record<string, unknown>>
  const [pricesItems] = useAccordionItems()

  const priceListKeys = Object.keys(messages['price-list'] || {})

  const items = priceListKeys.map((key) => {
    const procedures = procedureKeys
      .filter((textKey) => tPriceList.has(`${key}.${textKey}`))
      .map((textKey) => {
        return {
          name: tPriceList(`${key}.${textKey}.name`),
          price: tPriceList(`${key}.${textKey}.price`),
          link: tPriceList.has(`${key}.${textKey}.link`)
            ? tPriceList(`${key}.${textKey}.link`)
            : undefined
        }
      })

    return {
      title: tPriceList(`${key}.title`),
      price: tPriceList.has(`${key}.price`)
        ? tPriceList(`${key}.price`)
        : undefined,
      procedures
    }
  })

  return (
    <>
      <SpaceContainer>
        <Pillar>
          <H1>{t('title')}</H1>
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
