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
              title="Snabbfakta om bröstförstoring"
              facts={[
                {
                  icon: CalendarCheck,
                  label: 'Konsultation innan operation',
                  value: '60 minuter, ibland flera besök.'
                },
                {
                  icon: CircleDot,
                  label: 'Bröstimplantat',
                  value:
                    'Form och storlek efter önskemål. Från som minst 150 cc (ml, gram) till som mest ca 600 cc (ml, gram).'
                },
                {
                  icon: Clock,
                  label: 'Operationstid',
                  value: '30 - 45 minuter'
                },
                {
                  icon: Hospital,
                  label: 'Narkos/lokalbedövning',
                  value: 'Narkos'
                },
                {
                  icon: Banknote,
                  label: 'Pris',
                  value: 'Från 45 tusen kr. Kapselgaranti 5 tusen kr.'
                },
                {
                  icon: Clock,
                  label: 'Tid på kliniken',
                  value: '7 - 8 timmar'
                },
                {
                  icon: HousePlus,
                  label: 'Sjukskrivning',
                  value:
                    '4 veckor vid fysiskt ansträngande arbete till exempel hemtjänst, undersköterska, lagerarbete, fabriksarbete, klädbutik. Vid kontorsjobb återgång i arbete efter 2-7 dagar.'
                },
                {
                  icon: CalendarCheck,
                  label: 'Återbesök',
                  value: 'Ca 10 dagar och 3-4 månader efter operationen.'
                },
                {
                  icon: Bandage,
                  label: 'Återhämtning',
                  value:
                    'Läke-bh dygnet runt utom vid dusch till första återbesöket. Därefter mjuk, kupad sport-bh. Det går även bra med fin-bh med spets med bra stöd ibland. Bygel-bh först efter 3 månader.'
                },
                {
                  icon: Activity,
                  label: 'Sport & Gym',
                  value:
                    'Promenader från och med opdagens kväll (viktigt). Spinning och styrketräning ben, rumpa efter 5-6 veckor. Styrketräning mage, rygg efter 2 månader. Jogging, ridning, tennis och annat som gör att brösten studsar samt styrketräning överkropp efter 3 månader.'
                },
                {
                  icon: SquareChartGantt,
                  label: 'Övrigt',
                  value:
                    'Tejpning av ärren 6 månader. Skydda ärren från sol i minst ett år. Bad, bastu efter ca 2,5 veckor. Sova på rygg eller sidan går bra direkt.'
                }
              ]}
              ctaText="Boka konsultation"
              ctaUrl="/boka"
            />
            <Image
              src={ImplantsInHand}
              alt={tPage('media.implantsInHandAlt')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <H3>{'Vanliga frågor & svar om bröstförstoring'}</H3>
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
            <H2>
              {'Hur går en bröstförstoring till? – En teknisk djupdykning'}
            </H2>
            <P>
              {
                'På Dahliakliniken värdesätter vi trygghet, kunskap och transparens. Vi strävar alltid efter att ge dig som patient tydlig och saklig information om våra behandlingar och estetiska ingrepp. En vanlig fråga vi får är: Hur går en bröstförstoringsoperation till?'
              }
            </P>
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

export default Brostforstoring
