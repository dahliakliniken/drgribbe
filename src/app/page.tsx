import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { allTreatmentsData } from '@/data/allTreatmentsData'
import belowheadingImage from '@/public/images/_N3A9899.jpg'
import Consultation from '@/public/images/N3A0033_.jpg'
import WaitingRoom from '@/public/images/N3A7746_edited.png'

import { Pillar } from './components/layout/Pillar'
import { SpaceContainer } from './components/layout/SpaceContainer'
import { TreatmentBox } from './components/layout/TreatmentBox'
import { Card } from './components/surfaces/Card'
import { Hero } from './components/surfaces/Hero'
import { JsonLd } from './components/surfaces/JsonLd'
import Testimonials from './components/surfaces/Testimonials/Testimonials'
import { A } from './components/typography/A'
import { H1 } from './components/typography/H1'
import { H2 } from './components/typography/H2'
import { H3 } from './components/typography/H3'
import { P } from './components/typography/P'
import { BgColors } from './types'

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Dahliakliniken',
  image: 'https://www.dahliakliniken.se/opengraph-image.jpg',
  url: 'https://www.dahliakliniken.se',
  telephone: '+46 8 520 278 78',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'S:t Göransgatan 126',
    addressLocality: 'Stockholm',
    postalCode: '112 45',
    addressCountry: 'SE'
  },
  description:
    'Dahliakliniken är en modern klinik i Stockholm som är specialiserad på estetiska bröstoperationer som bröstförstoring, bröstlyft och bröstförminskning.',
  medicalSpecialty: {
    '@type': 'MedicalSpecialty',
    name: 'PlasticSurgery'
  },
  founder: {
    '@type': 'Person',
    name: 'Dr Örjan Gribbe'
  },
  areaServed: {
    '@type': 'Place',
    name: 'Stockholm'
  },
  sameAs: [
    'https://www.facebook.com/dahliakliniken',
    'https://www.instagram.com/dahliakliniken'
  ]
}

export const metadata = {
  other: {
    'google-site-verification': 'scjbJTK54uTe66Okuk5_r-T36DpV5FkEsy8eWukJ28A'
  }
}

export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <JsonLd data={schemaData} />
      <Hero />
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar noPadding>
            <SpaceContainer>
              <H1>
                {t.rich('aboutBox.title', {
                  span: (chunks) => (
                    <span className="block text-lg">{chunks}</span>
                  ),
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </H1>
              <P className="fat">
                {t.rich('aboutBox.newClinicName', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P>
                {t.rich('aboutBox.welcomeMessage', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P>
                {t.rich('aboutBox.paragraph1', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
            </SpaceContainer>
          </Pillar>
        }
      />

      <SpaceContainer noPadding>
        <Pillar>
          <SpaceContainer>
            <H2>{t('testimonials.title')}</H2>
          </SpaceContainer>
        </Pillar>
        <Testimonials />
      </SpaceContainer>

      <SpaceContainer noPadding>
        <Pillar>
          <SpaceContainer>
            <H2>{t('treatmentBox.title')}</H2>
          </SpaceContainer>
        </Pillar>

        <div className="m-auto xl:max-w-7xl">
          <TreatmentBox treatments={allTreatmentsData} />
        </div>
      </SpaceContainer>

      <SpaceContainer noPadding spaceTop>
        <Card
          bgColor={BgColors.Beige}
          className="before:bg-[50%_30%]"
          content={
            <>
              <H2 upperCase className="text-center">
                {t('common.bookConsultation')}
              </H2>
              <div className="m-auto flex max-w-xs justify-center">
                <A href="/boka" className="uppercase" buttonStyle inverted>
                  {t('common.bookNow')}
                </A>
              </div>
            </>
          }
        />
      </SpaceContainer>

      {/* About Section */}
      <Card
        id="om-kliniken"
        className="before:[background-size:500%] before:bg-[30%_40%]"
        bgColor={BgColors.White}
        content={
          <Pillar>
            <Image
              src={Consultation}
              alt="Bild på dr Örjan Gribbe som visar olika bröstimplantat för en patient."
            />
            <span className="imagetext">{t('profileCard.imageText')}</span>
            <span className="imagetext-inline">
              {t('profileCard.paragraph1')}
            </span>
            <span className="imagetext-inline">
              <A href={'https://sfep.se/'}>{t('profileCard.linkpre')}</A>
            </span>

            <SpaceContainer noPadding spaceTop>
              <H2>
                {t.rich('aboutClinic.title', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </H2>
              <P>
                {t.rich('aboutClinic.paragraph1', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P>{t('aboutClinic.paragraph2')}</P>
              <SpaceContainer noPadding spaceVertically>
                <Image
                  src={belowheadingImage}
                  alt={t('altText.brostoperationerConsultation')}
                  className="max-h-svh object-cover object-center"
                />
              </SpaceContainer>
              <P>
                {t.rich('aboutClinic.paragraph3', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P>
                {t.rich('aboutClinic.paragraph4', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>

              <H3>
                {t.rich('aboutClinic.ourPhilosophy', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </H3>
              <P>
                {t.rich('aboutClinic.paragraph5', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <A href={'/garanti#phil'}>{t('aboutClinic.readMore')}</A>
            </SpaceContainer>
          </Pillar>
        }
      />

      <Card
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>
              {t.rich('operationDepartment.title', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </H2>
            <div className="lg:columns-2">
              <P white>
                {t.rich('operationDepartment.text1', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P white>
                {t.rich('operationDepartment.text2', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P white>
                {t.rich('operationDepartment.text3', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P white>
                {t.rich('operationDepartment.text4', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
              <P white>
                {t.rich('operationDepartment.text5', {
                  strong: (chunks) => <strong>{chunks}</strong>
                })}
              </P>
            </div>
          </Pillar>
        }
      />

      <Pillar>
        <Image
          src={WaitingRoom}
          alt={t('altText.patientRoom')}
          className="max-h-[calc(100dvh-80px)] object-cover object-center"
        />
      </Pillar>

      <SpaceContainer noPadding>
        <Card
          bgColor={BgColors.Beige}
          className="before:bg-[30%_30%] lg:before:[background-size:200%]"
          content={
            <Pillar>
              <H2 className="text-center">
                {'Boka en konsultation med vår specialist idag'}
              </H2>
              <P className="text-center">
                {
                  'Boka en konsultation där vi tillsammans går igenom dina önskemål och möjligheter'
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
      </SpaceContainer>
    </>
  )
}
