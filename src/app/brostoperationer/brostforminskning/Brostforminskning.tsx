import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { Accordion } from '@/app/components/surfaces/Accordion'
import { Card } from '@/app/components/surfaces/Card'
import { A } from '@/app/components/typography/A'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'

import forminskning1 from '../../../../public/images/_N3A7302.jpg'
import forminskning2 from '../../../../public/images/_N3A7621.jpg'
import { useAccordionData } from './accordionData'

const Brostforminskning = () => {
  const t = useTranslations('brostforminskning')
  const [faqItems] = useAccordionData()

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('background.text1')}</P>
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
              <P>{t('background.text2')}</P>
              <P>{t('background.text3')}</P>
            </SpaceContainer>
            <SpaceContainer noPadding>
              <Section>
                <H3>{'Vanliga frågor & svar om bröstförmiskning'}</H3>
                <Accordion size="h4" items={faqItems} />
                <div className="m-auto my-6 flex justify-center">
                  <A href="/fragor-och-svar">
                    {useTranslations()('common.linktoFaq')}
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

      <SpaceContainer>
        <Pillar>
          <H2>{t('consultation.heading1')}</H2>
          <P>{t('consultation.text1')}</P>
          <P>{t('consultation.text2')}</P>
          <P>{t('consultation.text3')}</P>
          <P>{t('consultation.text4')}</P>
          <P>{t('consultation.text5')}</P>
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{t('technique.heading1')}</H2>
            <H3 white>{t('technique.preSurgery.heading1')}</H3>
            <P white>{t('technique.preSurgery.text1')}</P>
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
              <H3 white>{t('technique.surgery.heading1')}</H3>
              <P white>{t('technique.surgery.text1')}</P>
              <P white>{t('technique.surgery.text2')}</P>
              <P white>{t('technique.surgery.text3')}</P>
              <P white>{t('technique.surgery.text4')}</P>
              <P white>{t('technique.surgery.text5')}</P>
              <P white>{t('technique.surgery.text6')}</P>
              <P white>{t('technique.surgery.text7')}</P>
              <P white>{t('technique.surgery.text8')}</P>
              <P white>{t('technique.surgery.text9')}</P>
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

export default Brostforminskning
