import { useTranslations } from 'next-intl'

import { Pillar } from '../components/layout/Pillar'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import { Card } from '../components/surfaces/Card'
import { H1 } from '../components/typography/H1'
import { H2 } from '../components/typography/H2'
import { P } from '../components/typography/P'
import { BgColors } from '../types'
import { usePolicyAccordionItems } from './accordionData'

const PersonuppgiftsPolicy = () => {
  const t = useTranslations()
  const [policyItems, rightsItems] = usePolicyAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Coral}
        className="before:bg-[30%_30%] lg:before:[background-size:200%]"
        content={
          <Pillar>
            <H1 white>{t('Personuppgiftspolicy.title')}</H1>
            <P white>{t('Personuppgiftspolicy.preamble')}</P>
          </Pillar>
        }
      />
      <SpaceContainer>
        <Pillar>
          <Accordion outLine items={policyItems} />
        </Pillar>
      </SpaceContainer>
      <SpaceContainer>
        <Pillar>
          <H2>{t('Personuppgiftspolicy.yourRights')}</H2>
          <Accordion outLine items={rightsItems} />
        </Pillar>
      </SpaceContainer>
    </>
  )
}

export default PersonuppgiftsPolicy
