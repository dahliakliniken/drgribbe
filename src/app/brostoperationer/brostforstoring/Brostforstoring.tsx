import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { Accordion } from '@/app/components/surfaces/Accordion'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { A } from '@/app/components/typography/A'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'

import ImplantsInHand from '../../../../public/images/_N3A7297.jpg'
import { useAccordionData } from './accordionData'

const Brostforstoring = () => {
  const t = useTranslations('brostforstoring')
  const [teknikAccordion, faqAccordion] = useAccordionData()

  return (
    <>
      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('background')}</P>
            <P white>{t('background2')}</P>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <SpaceContainer>
              <Image
                src={ImplantsInHand}
                alt={t('altText.ImplantsInHand')}
                className="max-h-svh object-cover object-center"
              />      
            </SpaceContainer>
            <SpaceContainer spaceTop>
              <Section>
                  <H2>{t('implanttitle')}</H2>
                  <P>{t('implantbackground.text1')}</P>
                  <P>{t('implantbackground.text2')}</P>
              </Section>
            </SpaceContainer>          
            <SpaceContainer>
              <Section>
                <H3>{'Vanliga frågor & svar om bröstförstoring'}</H3>
                <Accordion size="h4" items={faqAccordion} />
              </Section>
            </SpaceContainer>
          </Pillar>          
        }
      />
      <SpaceContainer spaceVertically noPadding>
        <SimpleCard
          bgColor={BgColors.Green}
          bgPosition="right"
          content={
            <>
              <H2 upperCase white className="text-center">
                {useTranslations()('common.freeConsultation')}
              </H2>
              <div className="m-auto flex max-w-xs justify-center">
                <A href="/boka" className="uppercase" buttonStyle>
                  {useTranslations()('common.bookNow')}
                </A>
              </div>
            </>
          }
        />
      </SpaceContainer>

      <SpaceContainer>
        <Pillar>
          <Section>
            <H2>{'Hur går en bröstförstoring till?'}</H2>
            <P>{'Hos oss på Dahliakliniken är det vikigt att utblilda och att informera om hur olika ingrepp går till. Här nedan kan du läsa mer om hur en bröstförstoringsoperation går till'}</P>
            <H3>{t('technique.heading1')}</H3>
            <P>{t('technique.text1')}</P>
            <Accordion size="h4" items={teknikAccordion} />
          </Section>
        </Pillar>
      </SpaceContainer>

      <SpaceContainer>
        <Pillar>
          <H3 id="placering">{t('placement.heading1')}</H3>
          <P>{t('placement.text1')}</P>
          <P>{t('placement.text2')}</P>
        </Pillar>
      </SpaceContainer>

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H2 white>{t('withBodyFat.title')}</H2>
            <P white>{t('withBodyFat.background.text1')}</P>

            <H3 white>{t('withBodyFat.technique.title')}</H3>
            <P white>{t('withBodyFat.technique.text1')}</P>

            <ol className="list-decimal space-y-6 pl-6 marker:text-lg marker:font-semibold marker:text-white">
              <li>
                <P white>{t('withBodyFat.technique.list1')}</P>
              </li>
              <li>
                <P white>{t('withBodyFat.technique.list2')}</P>
              </li>
              <li>
                <P white>{t('withBodyFat.technique.list3')}</P>
              </li>
            </ol>
            <SpaceContainer spaceTop noPadding>
              <P white>{t('withBodyFat.technique.text2')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      <SpaceContainer>
        <Pillar>
          <H2>{t('withBodyFat.hybrid.title')}</H2>
          <P>{t('withBodyFat.hybrid.text1')}</P>
        </Pillar>
      </SpaceContainer>

{/*       <SpaceContainer spaceVertically noPadding>
        <SimpleCard
          bgColor={BgColors.Green}
          bgPosition="right"
          content={
            <>
              <H2 upperCase white className="text-center">
                {useTranslations()('common.freeConsultation')}
              </H2>
              <div className="m-auto flex max-w-xs justify-center">
                <A href="/boka" className="uppercase" buttonStyle>
                  {useTranslations()('common.bookNow')}
                </A>
              </div>
            </>
          }
        />
      </SpaceContainer> */}
      <SpaceContainer noPadding>
        <SimpleCard
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
                  {useTranslations()('common.bookNow')}
                </A>
              </div>
            </Pillar>
          }
        />
      </SpaceContainer>
    </>
  )
}

export default Brostforstoring
