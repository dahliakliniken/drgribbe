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
import ImplantsInHand from '@/public/images/_N3A7297.jpg'

import { useAccordionData } from './accordionData'

const Brostforstoring = () => {
  const tPage = useTranslations('brostforstoring.page')
  const tCommon = useTranslations('common')
  const [teknikAccordion, faqAccordion] = useAccordionData()

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{tPage('hero.title')}</H1>
            <P white>
              {tPage.rich('hero.intro', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
            <P white>{tPage('hero.introContinuation')}</P>
          </Pillar>
        }
      />

      <Card
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar noPadding>
            <SpaceContainer spaceTop noPadding>
              <Section>
                <H2>{tPage('implantOverview.title')}</H2>
                <P>
                  {tPage.rich('implantOverview.paragraph1', {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}
                </P>
                <P>
                  {tPage.rich('implantOverview.paragraph2', {
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
            <Image
              src={ImplantsInHand}
              alt={tPage('media.implantsInHandAlt')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <H3>{tPage('faq.sectionTitle')}</H3>
              <Accordion size="h4" items={faqAccordion} />
              <div className="m-auto my-6 flex justify-center">
                <A href="/fragor-och-svar">
                  {tCommon('linktoFaq')}
                </A>
              </div>
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

      <Pillar noPadding>
        <SpaceContainer spaceTop>
          <Section>
            <H2>{tPage('deepDive.title')}</H2>
            <P>{tPage('deepDive.paragraph1')}</P>
            <H3>{tPage('technique.sectionTitle')}</H3>
            <P>{tPage('technique.intro')}</P>
            <Accordion size="h4" items={teknikAccordion} />
          </Section>
        </SpaceContainer>
      </Pillar>

      <SpaceContainer>
        <Pillar>
          <H3 id="placering">{tPage('placement.sectionTitle')}</H3>
          <P>{tPage('placement.paragraph1')}</P>
          <P>{tPage('placement.paragraph2')}</P>
        </Pillar>
      </SpaceContainer>

      <Card
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H2 white>{tPage('withBodyFat.title')}</H2>
            <P white>{tPage('withBodyFat.background.paragraph1')}</P>

            <H3 white>{tPage('withBodyFat.technique.title')}</H3>
            <P white>{tPage('withBodyFat.technique.paragraph1')}</P>

            <ol className="list-decimal space-y-6 pl-6 marker:text-lg marker:font-semibold marker:text-white">
              <li>
                <P white>{tPage('withBodyFat.technique.listItem1')}</P>
              </li>
              <li>
                <P white>{tPage('withBodyFat.technique.listItem2')}</P>
              </li>
              <li>
                <P white>{tPage('withBodyFat.technique.listItem3')}</P>
              </li>
            </ol>
            <SpaceContainer spaceTop noPadding>
              <P white>{tPage('withBodyFat.technique.paragraph2')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      <SpaceContainer>
        <Pillar>
          <H2>{tPage('withBodyFat.hybrid.title')}</H2>
          <P>{tPage('withBodyFat.hybrid.paragraph1')}</P>
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

export default Brostforstoring
