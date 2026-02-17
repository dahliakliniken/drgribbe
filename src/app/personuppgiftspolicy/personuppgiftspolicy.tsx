import { useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { P } from '@/components/typography/P'

import { BgColors } from '../types'
import { usePolicyAccordionItems } from './accordionData'

const PersonuppgiftsPolicy = () => {
  const tPage = useTranslations('personuppgiftspolicy.page')
  const [policyItems, rightsItems] = usePolicyAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Coral}
        className="before:bg-[30%_30%] lg:before:[background-size:200%]"
        content={
          <Pillar>
            <H1 white>{tPage('hero.title')}</H1>
            <P white>{tPage('hero.preamble')}</P>
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
          <H2>{tPage('rights.sectionTitle')}</H2>
          <Accordion outLine items={rightsItems} />
        </Pillar>
      </SpaceContainer>
    </>
  )
}

export default PersonuppgiftsPolicy
