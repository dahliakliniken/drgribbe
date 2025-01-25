import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Consultation from '../../public/images/konsultation_med_patient.jpg'
import WaitingRoom from '../../public/images/waiting-room.jpg'
import Doctor from '../../public/images/doctor.jpg'
import SfepLogo from '../../public/images/sfep-logo.svg'
import { TreatmentBox } from './components/layout/TreatmentBox'
import { H2 } from './components/typography/H2'
import { H3 } from './components/typography/H3'
import { SpaceContainer } from './components/layout/SpaceContainer'
import { P } from './components/typography/P'
import { SimpleCard } from './components/surfaces/SimpleCard'
import { BgColors } from './types'
import { Pillar } from './components/layout/Pillar'
import { allTreatmentsData } from '@/data/allTreatmentsData'
import { A } from './components/typography/A'

const Page: React.FC = () => {
  const t = useTranslations()
  return (
    <>
      <section className="relative flex h-[calc(100dvh-80px)] flex-col items-center justify-center bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat">                     
        <div className='w-full h-full herogradient'></div>
        <div className="absolute bottom-24">
          <A href="/boka" buttonStyle>
            {t('common.bookConsultation')}
          </A>
        </div>
      </section>

      {/* <Card
          bgColor={BgColors.Coral}
          bgPosition="right"
          image={
            <Image src={Consultation} alt={''} className="hidden lg:block" />
          }
          title={<H2 white>{t('aboutBox.title')}</H2>}
          paragraphs={[t('aboutBox.paragraph1'), t('aboutBox.paragraph2')]}
          threeColumns
        /> */}

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <SpaceContainer>
              <H2>{t('aboutBox.title')}</H2>
              <P>{t('aboutBox.paragraph1')}</P>
              <P>{t('aboutBox.paragraph2')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      <Image src={Consultation} alt={''} className="lg:hidden" />
      <SpaceContainer>
        <div className="m-auto xl:max-w-7xl">
          <div className='flex space-x-3 overflow-x-auto px-gapSpace xl:grid xl:grid-cols-3 xl:items-stretch'>
            <blockquote className="testimonial w-[90%] flex-none sm:w-[60%] md:w-[40%] xl:w-auto">
              <i>{"Jag är så väldigt nöjd med min bröstförstoring! Doktor Örjan Gribbe opererade mig för ett tag sedan och brösten är fantastiska, naturliga och ännu finare nu än strax efter operationen..."}</i>
            </blockquote>

            <blockquote className="testimonial w-[90%] flex-none sm:w-[60%] md:w-[40%] xl:w-auto">
              <i>{"Jag är så väldigt nöjd med min bröstförstoring! Doktor Örjan Gribbe opererade mig för ett tag sedan och brösten är fantastiska, naturliga och ännu finare nu än strax efter operationen..."}</i>
            </blockquote>

            <blockquote className="testimonial w-[90%] flex-none sm:w-[60%] md:w-[40%] xl:w-auto">
              <i>{"Jag är så väldigt nöjd med min bröstförstoring! Doktor Örjan Gribbe opererade mig för ett tag sedan och brösten är fantastiska, naturliga och ännu finare nu än strax efter operationen..."}</i>
            </blockquote>
          </div>
        </div>        
      </SpaceContainer>

      <SpaceContainer noPadding>
        <Pillar>
          <H2 upperCase>{t('treatmentBox.title')}</H2>
        </Pillar>
      </SpaceContainer>

      <SpaceContainer spaceTop>
        <div className="m-auto xl:max-w-7xl">
          <TreatmentBox treatments={allTreatmentsData} />
        </div>
      </SpaceContainer>

      <SpaceContainer noPadding spaceTop>
        <SimpleCard
          bgColor={BgColors.Coral}
          bgPosition="left"
          content={
            <>
              <H2 upperCase white className="text-center">
                {t('common.freeConsultation')}
              </H2>
              <div className="m-auto flex max-w-xs justify-center">
                <A href="/boka" className="uppercase" buttonStyle>
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
        className="before:bg-500 before:bg-[30%_40%]"
        bgColor={BgColors.White}
        content={
          <Pillar>
            <Image src={Consultation} alt={''} className="hidden lg:block" />
            <SpaceContainer noPadding spaceTop>
              <H2>{t('aboutClinic.title')}</H2>
              <P>{t('aboutClinic.paragraph1')}</P>
              <Image
                src={SfepLogo}
                alt={t('altText.sfepLogo')}
                height={150}
                className="m-auto mb-4 text-center"
                // lg:float-right lg:ml-4
              />
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

      {/* <SimpleCard
            bgColor={BgColors.Green}
            bgPosition="left"
            content={
              <Pillar>
                <H2 white>{t('profileCard.title')}</H2>
                <div className="lg:flex">
                <div>
                  <P white className="lg:hidden">
                    {t('profileCard.imageText')}
                  </P>
                  <Image
                    src={Doctor}
                    alt={t('profileCard.imageAlt')}
                    className="mx-auto my-4 rounded-full lg:mr-9"
                    height={280}
                  />
                  <P white className="hidden lg:block">
                    {t('profileCard.imageText')}
                  </P>
                </div>
                <div>
                  <P white>{t('profileCard.paragraph1')}</P>
                  <P white>{t('profileCard.paragraph2')}</P>
                  <P white>{t('profileCard.paragraph3')}</P>
                </div>
              </div>  
              </Pillar> 
            }
          /> */}

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <div className="lg:flex">
            <div>
              <P white className="lg:hidden">
                {t('profileCard.imageText')}
              </P>
              <Image
                src={Doctor}
                alt={t('profileCard.imageAlt')}
                className="mx-auto my-4 rounded-full"
                height={280}
              />
              <P white className="hidden lg:block">
                {t('profileCard.imageText')}
              </P>
            </div>
            <div>
              <P white>{t('profileCard.paragraph1')}</P>
              <P white>{t('profileCard.paragraph2')}</P>
              <P white>{t('profileCard.paragraph3')}</P>
            </div>
          </div>
        }
        title={<H2 white>{t('profileCard.title')}</H2>}
      />
    </>
  )
}

export default Page
