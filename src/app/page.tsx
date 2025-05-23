import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { allTreatmentsData } from '@/data/allTreatmentsData'

import belowheadingImage from '../../public/images/_N3A9899.jpg'
import Consultation from '../../public/images/N3A0033_.jpg'
import WaitingRoom from '../../public/images/N3A7746_edited.png'
import { Pillar } from './components/layout/Pillar'
import { SpaceContainer } from './components/layout/SpaceContainer'
import { TreatmentBox } from './components/layout/TreatmentBox'
import { Hero } from './components/surfaces/Hero'
import { SimpleCard } from './components/surfaces/SimpleCard'
import Testimonials from './components/surfaces/Testimonial'
import { A } from './components/typography/A'
import { H1 } from './components/typography/H1'
import { H2 } from './components/typography/H2'
import { H3 } from './components/typography/H3'
import { P } from './components/typography/P'
import { BgColors } from './types'

export const metadata = {
  other: {
    'google-site-verification': 'scjbJTK54uTe66Okuk5_r-T36DpV5FkEsy8eWukJ28A'
  }
}

export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <Hero />
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <SpaceContainer>
              <H1>{t('aboutBox.title')}</H1>
              <P className="fat">
                {'Dr Örjan Gribbe lanserar nytt kliniknamn, Dahliakliniken.'}
              </P>
              <P>
                {
                  'Välkommen till en klinik helt specialiserad på estetiska bröstoperationer'
                }
              </P>
              <P>{t('aboutBox.paragraph1')}</P>
              <P>{t('aboutBox.paragraph2')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      {/* <Image src={Consultation} alt={''} className="lg:hidden" /> */}
      <SpaceContainer>
        <Testimonials />
      </SpaceContainer>

      <SpaceContainer noPadding>
        <Pillar>
          <SpaceContainer>
            <H2>{t('treatmentBox.title')}</H2>
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>

      <SpaceContainer spaceTop>
        <div className="m-auto xl:max-w-7xl">
          <TreatmentBox treatments={allTreatmentsData} />
        </div>
      </SpaceContainer>

      <SpaceContainer noPadding spaceTop>
        <SimpleCard
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
      <SimpleCard
        id="om-kliniken"
        className="before:[background-size:500%] before:bg-[30%_40%]"
        bgColor={BgColors.White}
        content={
          <Pillar>
            <Image src={Consultation} alt={''} />
            <span className="imagetext">{t('profileCard.imageText')}</span>
            <span className="imagetext-inline">
              {t('profileCard.paragraph1')}
            </span>
            <span className="imagetext-inline">
              <A href={'https://sfep.se/'}>{t('profileCard.linkpre')}</A>
            </span>
            <SpaceContainer noPadding spaceTop>
              <H2>{t('aboutClinic.title')}</H2>
              <P>{t('aboutClinic.paragraph1')}</P>
              <SpaceContainer noPadding spaceVertically>
                <Image
                  src={belowheadingImage}
                  alt={t('altText.brostoperationerConsultation')}
                  className="max-h-svh object-cover object-center"
                />
              </SpaceContainer>

              <P>{t('aboutClinic.paragraph2')}</P>

              <H3>{t('aboutClinic.ourphilosophy')}</H3>
              <P>{t('aboutClinic.paragraph3')}</P>
              <A href={'/garanti#phil'}>{t('aboutClinic.readMore')}</A>
            </SpaceContainer>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{t('operationDepartment.title')}</H2>
            <div className="lg:columns-2">
              <P white>{t('operationDepartment.text1')}</P>
              <P white>{t('operationDepartment.text2')}</P>
              <P white>{t('operationDepartment.text3')}</P>
              <P white>{t('operationDepartment.text4')}</P>
              <P white>{t('operationDepartment.text5')}</P>
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
