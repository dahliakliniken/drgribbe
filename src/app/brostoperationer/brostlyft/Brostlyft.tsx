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

import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { Accordion } from '@/app/components/surfaces/Accordion'
import { Card } from '@/app/components/surfaces/Card'
import { JsonLd } from '@/app/components/surfaces/JsonLd'
import { QuickFacts } from '@/app/components/surfaces/QuickFacts'
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

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Bröstlyft i Stockholm - Dahliakliniken',
    description:
      'Om brösthuden är lös och hänger kan den ofta fyllas ut med bröstimplantat på ett estetiskt vackert sätt. Här kan du läsa om hur ett bröstlyft går till.',
    image: 'https://www.dahliakliniken.se/images/_N3A7179.jpg',
    procedureType: 'Bröstlyft',
    medicalSpecialty: 'PlasticSurgery',
    potentialAction: {
      '@type': 'Action',
      name: 'Boka en konsultation för bröstlyft',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.dahliakliniken.se/boka'
      }
    }
  }

  return (
    <>
      <JsonLd data={schemaData} />
      <Card
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>
              {t.rich('background.text1', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
            <P white>
              {t.rich('background.text1-2', {
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
              alt={t('altText.inchair')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer spaceTop noPadding>
              <Section>
                <H2>
                  {
                    'Bröstlyft – lösningen när brösten förlorat volym, form eller symmetri'
                  }
                </H2>
                <P>{t('background.text2')}</P>
                <P>
                  {t.rich('background.text3', {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}
                </P>
              </Section>
            </SpaceContainer>
            <QuickFacts
              title="Snabbfakta om Bröstförstoring med bröstlyft"
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
                    'Form och storlek delvis efter önskemål. Mer begränsat än vid bröstförstoring då det inte går att lägga in lika stora bröstimplantat vid bröstlyft. Ofta inte behov av stor volym.'
                },
                {
                  icon: Clock,
                  label: 'Operationstid',
                  value: '2,5 - 3 timmar'
                },
                {
                  icon: Hospital,
                  label: 'Narkos/lokalbedövning',
                  value: 'Narkos'
                },
                {
                  icon: Banknote,
                  label: 'Pris',
                  value: 'Från 75 tusen kr. Kapselgaranti 5 tusen kr.'
                },
                {
                  icon: Clock,
                  label: 'Tid på kliniken',
                  value: '9 - 10 timmar'
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
                    'Tejpning av ärren 6 månader. Skydda ärren från sol i minst ett år. Bad, bastu efter ca 4-5 veckor. Sova på rygg eller sidan går bra direkt.'
                }
              ]}
              ctaText="Boka konsultation"
              ctaUrl="/boka"
            />
            <SpaceContainer noPadding>
              <Section>
                <H3>{'Vanliga frågor & svar om bröstlyft'}</H3>
                <Accordion size="h4" items={faqAccordion} />
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

export default Brostlyft
