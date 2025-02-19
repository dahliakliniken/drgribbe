import { useTranslations } from 'next-intl'
import { Pillar } from '../components/layout/Pillar'
import { H1 } from '../components/typography/H1'
import { P } from '../components/typography/P'
import { Accordion } from '../components/surfaces/Accordion'
import { useAccordionItems } from './accordionData'
import { BgColors } from '../types'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { H2 } from '../components/typography/H2'
import { A } from '../components/typography/A'

const FragorOchSvar = () => {
  const t = useTranslations()

  const faqItems = useAccordionItems()

  return (
    <>
      <SimpleCard
        bgColor={BgColors.Beige}
        className="before:bg-500 before:bg-[30%_30%] lg:before:bg-200"
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
      <SimpleCard
        bgColor={BgColors.Beige}
        className="before:bg-[30%_30%] lg:before:bg-200"
        content={
          <Pillar>
            <H2 className="text-center">
              {'Vill du veta mer om våra behandlingar?'}
            </H2>
            <P className="text-center">
              {
                'Boka en kostnadsfri konsultation där vi tillsammans går igenom dina önskemål och möjligheter'
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
