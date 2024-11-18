import Consultation from '../../public/images/konsultation_med_patient.jpg'
import { TreatmentBox } from './components/layout/TreatmentBox'
import { H2 } from './components/typography/H2'
import { Card } from './components/surfaces/Card'
import { useTranslations } from 'next-intl'
import { SpaceContainer } from './components/layout/SpaceContainer'
import { P } from './components/typography/P'
import Image from 'next/image'
import { Button } from './components/inputs/Button'
import Doctor from '../../public/images/doctor.jpg'
import { CardCustom } from './components/surfaces/CardCustom'

const Page: React.FC = () => {
  const t = useTranslations()
  return (
    <>
      <main className="mb-56 flex flex-col">
        <section className="relative flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-[url('/images/Welcome.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute bottom-24">
            <Button text={t('common.bookConsultation')} />
          </div>
        </section>

        <Card
          bgColor="bg-coral"
          bgLeft
          image={
            <Image src={Consultation} alt={''} className="hidden lg:block" />
          }
          title={<H2 white>{t('aboutBox.title')}</H2>}
          paragraphs={[t('aboutBox.paragraph1'), t('aboutBox.paragraph2')]}
          threeColumns
        />

        <Image src={Consultation} alt={''} className="lg:hidden" />

        <TreatmentBox />

        {/* About Section */}
        <SpaceContainer spaceVertically>
          <H2>{t('aboutClinic.title')}</H2>
          <P>{t('aboutClinic.paragraph1')}</P>
          <P>{t('aboutClinic.paragraph2')}</P>
        </SpaceContainer>

        <SpaceContainer spaceVertically noPadding>
          <CardCustom
            bgColor="bg-green"
            bgRight
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
