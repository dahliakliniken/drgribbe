import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { BgColors } from '@/app/types'
import { Pillar } from '@/components/layout/Pillar'
import { Section } from '@/components/layout/Section'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { A } from '@/components/typography/A'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import forminskning1 from '@/public/images/_N3A7302.jpg'
import forminskning2 from '@/public/images/_N3A7621.jpg'

import { useAccordionData } from './accordionData'

const Brostforminskning = () => {
  const tPage = useTranslations('brostforminskning.page')
  const tCommon = useTranslations('common')
  const [faqItems] = useAccordionData()

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{tPage('hero.title')}</H1>
            <P white>{tPage('hero.paragraph1')}</P>
          </Pillar>
        }
      />

      <Card
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar noPadding>
            <SpaceContainer noPadding>
              <Image
                src={forminskning1}
                alt={
                  'Dahliaklinikens Dr. Örja Gribbe konsulterar en förväntansfull ung kvinna om bröstförminskning'
                }
                className="max-h-svh object-cover object-center"
              />
            </SpaceContainer>
            <SpaceContainer noPadding spaceVertically>
              <H2>{'Hur går en bröstförminskning till?'}</H2>
              <P>{tPage('overview.paragraph1')}</P>
              <P>{tPage('overview.paragraph2')}</P>
            </SpaceContainer>
            <SpaceContainer noPadding>
              <Section>
                <H3>{'Vanliga frågor & svar om bröstförmiskning'}</H3>
                <Accordion size="h4" items={faqItems} />
                <div className="m-auto my-6 flex justify-center">
                  <A href="/fragor-och-svar">
                    {tCommon('linktoFaq')}
                  </A>
                </div>
              </Section>
            </SpaceContainer>
          </Pillar>
        }
      />

      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <>
            <H2 upperCase white className="text-center">
              {tCommon('freeConsultation')}
            </H2>
            <div className="m-auto flex max-w-xs justify-center">
              <A href="/boka" className="uppercase" buttonStyle>
                {tCommon('bookNow')}
              </A>
            </div>
          </>
        }
      />

      <SpaceContainer>
        <Pillar>
          <H2>{tPage('consultation.sectionTitle')}</H2>
          <P>{tPage('consultation.paragraph1')}</P>
          <P>{tPage('consultation.paragraph2')}</P>
          <P>{tPage('consultation.paragraph3')}</P>
          <P>{tPage('consultation.paragraph4')}</P>
          <P>{tPage('consultation.paragraph5')}</P>
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{tPage('technique.sectionTitle')}</H2>
            <H3 white>{tPage('technique.preSurgery.sectionTitle')}</H3>
            <P white>{tPage('technique.preSurgery.paragraph1')}</P>
            <SpaceContainer noPadding>
              <Image
                src={forminskning2}
                alt={
                  'Dahliaklinikens Dr. Örja Gribbe konsulterar en förväntansfull ung kvinna om bröstförminskning'
                }
                className="max-h-svh object-cover object-center"
              />
            </SpaceContainer>
            <SpaceContainer noPadding spaceTop>
              <H3 white>{tPage('technique.surgery.sectionTitle')}</H3>
              <P white>{tPage('technique.surgery.paragraph1')}</P>
              <P white>{tPage('technique.surgery.paragraph2')}</P>
              <P white>{tPage('technique.surgery.paragraph3')}</P>
              <P white>{tPage('technique.surgery.paragraph4')}</P>
              <P white>{tPage('technique.surgery.paragraph5')}</P>
              <P white>{tPage('technique.surgery.paragraph6')}</P>
              <P white>{tPage('technique.surgery.paragraph7')}</P>
              <P white>{tPage('technique.surgery.paragraph8')}</P>
              <P white>{tPage('technique.surgery.paragraph9')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      {/*       <SpaceContainer spaceVertically noPadding>
        <Card
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
                  {tCommon('bookNow')}
                </A>
              </div>
            </Pillar>
          }
        />
      </SpaceContainer>
    </>
  )
}

export default Brostforminskning
