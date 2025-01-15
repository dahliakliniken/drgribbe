import { useTranslations } from 'next-intl'
import { Pillar } from '../components/layout/Pillar'
import { H1 } from '../components/typography/H1'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import { useAccordionItems } from './accordionData'

const FragorOchSvar = () => {
  const t = useTranslations('fragorOchSvar')

  const faqItems = useAccordionItems()

  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <SpaceContainer>
          <H1>{t('title')}</H1>
          <P>{t('introduction')}</P>
          <SpaceContainer noPadding spaceVertically>
            <Accordion items={faqItems} />
          </SpaceContainer>
        </SpaceContainer>
      </Pillar>
    </main>
  )
}

export default FragorOchSvar
