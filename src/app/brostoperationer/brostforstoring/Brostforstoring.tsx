import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { A } from '@/app/components/typography/A'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'
import { useTranslations } from 'next-intl'
import { Accordion } from '@/app/components/surfaces/Accordion'
import { getTeknikAccordion } from './accordionData'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'

const Brostforstoring = () => {
  const t = useTranslations('brostforstoring')
  const teknikAccordion = getTeknikAccordion(t)

  return (
    <>
      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('background')}</P>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <Section>
              <H2>{t('implanttitle')}</H2>
              <P>{t('implantbackground.text1')}</P>
              <P>{t('implantbackground.text2')}</P>

              <H3>{t('technique.heading1')}</H3>
              <P>{t('technique.text1')}</P>

              <Accordion items={teknikAccordion} />

              {/* 
              

              <H3 >{t('technique.heading2')}</H3>
              <P >{t('technique.text2')}</P>

              <H3 >{t('technique.heading3')}</H3>
              <P >
                {t.rich('technique.text3', {
                  link: (chunks) => (
                    <AnchorLink href="#placering" className="text-white">
                      {chunks}
                    </AnchorLink>
                  )
                })}
              </P>
              <H3 >{t('technique.heading4')}</H3>
              <P >{t('technique.text4')}</P>
              <H3 >{t('technique.heading5')}</H3>
              <P >{t('technique.text5')}</P> */}
            </Section>
          </Pillar>
        }
      />

      {/* <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Section>
              <H3>{t('technique.heading6')}</H3>
              <P>{t('technique.text6_1')}</P>
              <P>{t('technique.text6_2')}</P>
              <P>{t('technique.text6_3')}</P>

              <H3>{t('technique.heading7')}</H3>
              <P>{t('technique.text7')}</P>

              <H3>{t('technique.heading8')}</H3>
              <P>{t('technique.text8')}</P>

              <H3>{t('technique.heading9')}</H3>
              <P>{t('technique.text9')}</P>
            </Section>
          </Pillar>
        }
      /> */}
      <SpaceContainer>
        <Pillar>
          <H2 id="placering">{t('placement.heading1')}</H2>
          <P>{t('placement.text1')}</P>
          <P>{t('placement.text2')}</P>
        </Pillar>
      </SpaceContainer>

      {/* <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H2 id="placering" white>
              {t('placement.heading1')}
            </H2>
            <P white>{t('placement.text1')}</P>
            <P white>{t('placement.text2')}</P>
          </Pillar>
        }
      /> */}

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H2 white>{t('withBodyFat.title')}</H2>
            {/* <H3 white>{t('withBodyFat.background.title')}</H3> */}
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
    </>
  )
}

export default Brostforstoring
