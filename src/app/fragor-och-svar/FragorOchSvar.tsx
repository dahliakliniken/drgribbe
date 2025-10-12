import { useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { A } from '@/components/typography/A'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { P } from '@/components/typography/P'

import { BgColors } from '../types'
import { useAccordionItems } from './accordionData'

const FragorOchSvar = () => {
  const t = useTranslations()

  const faqItems = useAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Beige}
        className="before:[background-size:500%] before:bg-[30%_30%] lg:before:[background-size:200%]"
        content={
          <SpaceContainer>
            <Pillar>
              <H1>{t('fragorOchSvar.title')}</H1>
              <P>{t('fragorOchSvar.introduction')}</P>
            </Pillar>
          </SpaceContainer>
        }
      />
      <SpaceContainer>
        <Pillar>
          <Accordion outLine items={faqItems} />
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.Beige}
        className="before:bg-[30%_30%] lg:before:[background-size:200%]"
        content={
          <Pillar>
            <H2 className="text-center">
              {'Vill du veta mer om våra behandlingar?'}
            </H2>
            <P className="text-center">
              {
                'Boka en konsultation där vi tillsammans går igenom dina önskemål och möjligheter'
              }
            </P>
            <div className="m-auto flex max-w-xs justify-center">
              <A href="/boka" className="uppercase" buttonStyle inverted>
                {t('common.bookNow')}
              </A>
            </div>
          </Pillar>
        }
      />
    </>
  )
}

export default FragorOchSvar
