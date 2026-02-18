import {
  Activity,
  Bandage,
  Banknote,
  CalendarCheck,
  CircleDot,
  Clock,
  Hospital,
  HousePlus,
  SquareChartGantt
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { BgColors } from '@/app/types'
import { Pillar } from '@/components/layout/Pillar'
import { Section } from '@/components/layout/Section'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { QuickFacts } from '@/components/surfaces/QuickFacts'
import { A } from '@/components/typography/A'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import inchair from '@/public/images/_N3A7179.jpg'

import { useAccordionData } from './accordionData'

const Brostlyft = () => {
  const tPage = useTranslations('brostlyft.page')
  const tCommon = useTranslations('common')
  const [faqAccordion] = useAccordionData()

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H1 white>{tPage('hero.title')}</H1>
            <P white>
              {tPage.rich('hero.leadParagraph', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
            <P white>
              {tPage.rich('hero.leadParagraphContinuation', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
          </Pillar>
        }
      />
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar noPadding>
            <Image
              src={inchair}
              alt={tPage('media.inchairAlt')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer spaceTop noPadding>
              <Section>
                <H2>{tPage('overview.sectionTitle')}</H2>
                <P>{tPage('overview.paragraph1')}</P>
                <P>
                  {tPage.rich('overview.paragraph2', {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}
                </P>
              </Section>
            </SpaceContainer>
            <QuickFacts
              title={tPage('quickFacts.title')}
              facts={[
                {
                  icon: CalendarCheck,
                  label: tPage('quickFacts.facts.consultationBeforeOperation.label'),
                  value: tPage('quickFacts.facts.consultationBeforeOperation.value')
                },
                {
                  icon: CircleDot,
                  label: tPage('quickFacts.facts.breastImplants.label'),
                  value: tPage('quickFacts.facts.breastImplants.value')
                },
                {
                  icon: Clock,
                  label: tPage('quickFacts.facts.operationDuration.label'),
                  value: tPage('quickFacts.facts.operationDuration.value')
                },
                {
                  icon: Hospital,
                  label: tPage('quickFacts.facts.anesthesia.label'),
                  value: tPage('quickFacts.facts.anesthesia.value')
                },
                {
                  icon: Banknote,
                  label: tPage('quickFacts.facts.price.label'),
                  value: tPage('quickFacts.facts.price.value')
                },
                {
                  icon: Clock,
                  label: tPage('quickFacts.facts.timeAtClinic.label'),
                  value: tPage('quickFacts.facts.timeAtClinic.value')
                },
                {
                  icon: HousePlus,
                  label: tPage('quickFacts.facts.sickLeave.label'),
                  value: tPage('quickFacts.facts.sickLeave.value')
                },
                {
                  icon: CalendarCheck,
                  label: tPage('quickFacts.facts.followUp.label'),
                  value: tPage('quickFacts.facts.followUp.value')
                },
                {
                  icon: Bandage,
                  label: tPage('quickFacts.facts.recovery.label'),
                  value: tPage('quickFacts.facts.recovery.value')
                },
                {
                  icon: Activity,
                  label: tPage('quickFacts.facts.sportAndGym.label'),
                  value: tPage('quickFacts.facts.sportAndGym.value')
                },
                {
                  icon: SquareChartGantt,
                  label: tPage('quickFacts.facts.other.label'),
                  value: tPage('quickFacts.facts.other.value')
                }
              ]}
              ctaText={tPage('quickFacts.ctaText')}
              ctaUrl="/boka"
            />
            <SpaceContainer noPadding>
              <Section>
                <H3>{tPage('faq.sectionTitle')}</H3>
                <Accordion size="h4" items={faqAccordion} />
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

      <SpaceContainer spaceTop>
        <Pillar>
          <H2>{tPage('technique.sectionTitle')}</H2>
          <P>{tPage('technique.paragraph1')}</P>
          <P>{tPage('technique.paragraph2')}</P>
          <P>{tPage('technique.paragraph3')}</P>
          <P>{tPage('technique.paragraph4')}</P>
          <P>{tPage('technique.paragraph5')}</P>
          <P>{tPage('technique.paragraph6')}</P>
        </Pillar>
      </SpaceContainer>
      <SpaceContainer noPadding>
        <Card
          bgColor={BgColors.Beige}
          className="before:bg-[30%_30%] lg:before:[background-size:200%]"
          content={
            <Pillar>
              <H2 className="text-center">{tPage('cta.title')}</H2>
              <P className="text-center">{tPage('cta.description')}</P>
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

export default Brostlyft
