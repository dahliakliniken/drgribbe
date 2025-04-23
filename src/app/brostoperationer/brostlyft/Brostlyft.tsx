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

import inchair from '../../../../public/images/_N3A7179.jpg'
import { useAccordionData } from './accordionData'



const Brostlyft = () => {
  const t = useTranslations('brostlyft')
  const [faqAccordion] = useAccordionData()
  return (
    <>
      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t.rich('background.text1', {
                strong: (chunks) => (
                  <strong>{chunks}</strong>
                )
                })}
            </P>
            <P white>{t.rich('background.text1-2', {
                strong: (chunks) => (
                  <strong>{chunks}</strong>
                )
                })}
            </P>
          </Pillar>
        }
      />
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Image
              src={inchair}
              alt={t('altText.inchair')}
              className="max-h-svh object-cover object-center"
            />  
            <SpaceContainer spaceTop noPadding>
              <Section>   
                <H2>{"Bröstlyft – lösningen när brösten förlorat volym, form eller symmetri"}</H2>
                <P>{t('background.text2')}</P>
                <P>{t.rich('background.text3', {
                    strong: (chunks) => (
                      <strong>{chunks}</strong>
                    )
                    })}
                </P>
              </Section>
            </SpaceContainer>
            <SpaceContainer noPadding>
              <Section>
                <H3>{'Vanliga frågor & svar om bröstlyft'}</H3>
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
      <SpaceContainer spaceTop>
        <Pillar>
          <H2>{t('techniques.heading1')}</H2>
          <P>{t('techniques.text1')}</P>
          <P>{t('techniques.text2')}</P>
          <P>{t('techniques.text3')}</P>
          <P>{t('techniques.text4')}</P>
          <P>{t('techniques.text5')}</P>
          <P>{t('techniques.text6')}</P>
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

export default Brostlyft
