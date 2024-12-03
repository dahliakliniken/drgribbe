import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Consultation from '../../public/images/konsultation_med_patient.jpg'
import PatientRoom from '../../public/images/patient-room.jpg'
import Doctor from '../../public/images/doctor.jpg'
import SfepLogo from '../../public/images/sfep-logo.svg'
import { TreatmentBox } from './components/layout/TreatmentBox'
import { H2 } from './components/typography/H2'
import { Card } from './components/surfaces/Card'
import { SpaceContainer } from './components/layout/SpaceContainer'
import { P } from './components/typography/P'
import { Button } from './components/inputs/Button'
import { SimpleCard } from './components/surfaces/SimpleCard'
import { BgColors } from './types'
import { Pillar } from './components/layout/Pillar'

const Page: React.FC = () => {
  const t = useTranslations()
  return (
    <>
      <main className="mb-36 flex flex-col">
        <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-24">
            <Button text={t('common.bookConsultation')} />
          </div>
        </section>

        <Card
          bgColor={BgColors.Coral}
          bgPosition="right"
          image={
            <Image src={Consultation} alt={''} className="hidden lg:block" />
          }
          title={<H2 white>{t('aboutBox.title')}</H2>}
          paragraphs={[t('aboutBox.paragraph1'), t('aboutBox.paragraph2')]}
          threeColumns
        />

        <Image src={Consultation} alt={''} className="lg:hidden" />

        <TreatmentBox />

        <SpaceContainer spaceVertically noPadding>
          <SimpleCard
            bgColor={BgColors.Coral}
            bgPosition="left"
            content={
              <div className="m-auto max-w-xs">
                <H2 upperCase white>
                  {t('common.freeConsultation')}
                </H2>
                <Button className="uppercase" text={t('common.bookNow')} />
              </div>
            }
          />

          {/* About Section */}
          <SimpleCard
            className="before:bg-500 before:bg-[30%_40%]"
            bgColor={BgColors.White}
            content={
              <Pillar>
                <H2>{t('aboutClinic.title')}</H2>
                <Image
                  src={SfepLogo}
                  alt={t('altText.sfepLogo')}
                  height={200}
                  className="m-auto mb-4 text-center lg:float-right lg:ml-4"
                />
                <P>{t('aboutClinic.paragraph1')}</P>
                <P>{t('aboutClinic.paragraph2')}</P>
              </Pillar>
            }
          />

          <Image
            src={PatientRoom}
            alt={t('altText.patientRoom')}
            className="max-h-[calc(100dvh-80px)] object-cover object-center"
          />
          <SimpleCard
            bgColor={BgColors.Green}
            bgPosition="left"
            content={
              <div className="lg:flex">
                <div>
                  <P color="text-white" className="lg:hidden">
                    {t('profileCard.imageText')}
                  </P>
                  <Image
                    src={Doctor}
                    alt={t('profileCard.imageAlt')}
                    className="mx-auto my-4 rounded-full lg:mr-9"
                    height={280}
                  />
                  <P color="text-white" className="hidden lg:block">
                    {t('profileCard.imageText')}
                  </P>
                </div>
                <div>
                  <P color="text-white">{t('profileCard.paragraph1')}</P>
                  <P color="text-white">{t('profileCard.paragraph2')}</P>
                  <P color="text-white">{t('profileCard.paragraph3')}</P>
                </div>
              </div>
            }
            title={<H2 white>{t('profileCard.title')}</H2>}
          />
        </SpaceContainer>
      </main>
    </>
  )
}

export default Page
