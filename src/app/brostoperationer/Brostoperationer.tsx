import { useMessages, useTranslations } from 'next-intl'
import { P } from '../components/typography/P'
import { H1 } from '../components/typography/H1'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import { H2 } from '../components/typography/H2'
import { TreatmentBox } from '../components/layout/TreatmentBox'
import { breastOperationsTreatmentsData } from '@/data/breastOperationsTreatmentsData'
import { Pillar } from '../components/layout/Pillar'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { BgColors } from '../types'
import { H3 } from '../components/typography/H3'
import { AnchorLink } from '../components/typography/AnchorLink'
import { A } from '../components/typography/A'
import ConsultationImage from '../../../public/images/brostoperation-konsultation.jpg'
import DayOfSurgeryImage from '../../../public/images/brostoperationer-day-of-surgery.jpg'
import SurgeryImage from '../../../public/images/brostoperationer-surgery.jpg'
import PostSurgeryImage from '../../../public/images/brostoperationer-post-surgery.jpg'
import Image from 'next/image'

const Brostoperationer = () => {
  const t = useTranslations()
  const messages = useMessages()
  const beforeOperationKeys = Object.keys(messages.beforeOperation)
  const afterOperationKeys = Object.keys(messages.afterOperation)
  const aftercareKeys = Object.keys(messages.aftercare)
  const afterFirstReturnVisitKeys = Object.keys(messages.afterFirstReturnVisit)

  const beforeOperationItems = beforeOperationKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3'] // Predefined keys for texts
    const content = contentKeys
      .filter((textKey) => t.has(`beforeOperation.${key}.${textKey}`)) // Filter out texts that don't exist
      .map((textKey) => t(`beforeOperation.${key}.${textKey}`))

    return {
      id: key,
      title: t(`beforeOperation.${key}.title`),
      content
    }
  })

  const afterOperationItems = afterOperationKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3']
    const content = contentKeys
      .filter((textKey) => t.has(`afterOperation.${key}.${textKey}`))
      .map((textKey) => t(`afterOperation.${key}.${textKey}`))

    return {
      id: key,
      title: t(`afterOperation.${key}.title`),
      content
    }
  })

  const aftercareItems = aftercareKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3', 'text4']
    const content = contentKeys
      .filter((textKey) => t.has(`aftercare.${key}.${textKey}`))
      .map((textKey) => t(`aftercare.${key}.${textKey}`))

    return {
      id: key,
      title: t(`aftercare.${key}.title`),
      content
    }
  })

  const afterFirstReturnVisitItems = afterFirstReturnVisitKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3', 'text4']
    const content = contentKeys
      .filter((textKey) => t.has(`afterFirstReturnVisit.${key}.${textKey}`))
      .map((textKey) => t(`afterFirstReturnVisit.${key}.${textKey}`))

    return {
      id: key,
      title: t(`afterFirstReturnVisit.${key}.title`),
      content
    }
  })

  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer noPadding>
        <Pillar>
          <SpaceContainer>
            <H1>{t('brostoperationer.title')}</H1>
          </SpaceContainer>
        </Pillar>

        <div className="m-auto xl:max-w-7xl">
          <TreatmentBox treatments={breastOperationsTreatmentsData} />
        </div>

        <SpaceContainer spaceTop noPadding>
          <SimpleCard
            bgColor={BgColors.Coral}
            bgPosition="right"
            content={
              <Pillar>
                <H2 white>{t('brostoperationer.heading1')}</H2>
                <H3 white>{t('brostoperationer.consultation.heading1')}</H3>
                <P white>{t('brostoperationer.consultation.text1')}</P>
                <P white>{t('brostoperationer.consultation.text2')}</P>
                <P white>{t('brostoperationer.consultation.text3')}</P>
                <P white>{t('brostoperationer.consultation.text4')}</P>
                <P white>{t('brostoperationer.consultation.text5')}</P>
                <P white>{t('brostoperationer.consultation.text6')}</P>
                <P white>{t('brostoperationer.consultation.text7')}</P>
                <P white>{t('brostoperationer.consultation.text8')}</P>
              </Pillar>
            }
          />
          <Image
            src={ConsultationImage}
            alt={t('altText.brostoperationerConsultation')}
            className="max-h-svh object-cover object-center"
          />
        </SpaceContainer>

        <SimpleCard
          bgColor={BgColors.White}
          bgPosition="right"
          content={
            <Pillar>
              <H3>{t('brostoperationer.dayOfSurgery.heading1')}</H3>
              <div className="lg:columns-2">
                <P>{t('brostoperationer.dayOfSurgery.text1')}</P>
                <P>
                  {t.rich('brostoperationer.dayOfSurgery.text2', {
                    link: (chunks) => (
                      <AnchorLink href="#forberedelser">{chunks}</AnchorLink>
                    )
                  })}
                </P>
                <P>{t('brostoperationer.dayOfSurgery.text3')}</P>
              </div>
            </Pillar>
          }
        />
        <Image
          src={DayOfSurgeryImage}
          alt={t('altText.brostoperationerDayOfSurgery')}
          className="max-h-svh object-cover object-center"
        />

        <SimpleCard
          bgColor={BgColors.White}
          bgPosition="right"
          content={
            <Pillar>
              <H3>{t('brostoperationer.surgery.heading1')}</H3>
              <P>{t('brostoperationer.surgery.text1')}</P>
              <P>{t('brostoperationer.surgery.text2')}</P>
            </Pillar>
          }
        />
        <Image
          src={SurgeryImage}
          alt={t('altText.brostoperationerSurgery')}
          className="max-h-svh object-cover object-center"
        />

        <SimpleCard
          bgColor={BgColors.Green}
          bgPosition="right"
          content={
            <>
              <H3 white>{t('brostoperationer.postSurgery.heading1')}</H3>
              <div className="lg:columns-3">
                <P white>{t('brostoperationer.postSurgery.text1')}</P>
                <P white>{t('brostoperationer.postSurgery.text2')}</P>
              </div>
            </>
          }
        />
        <Image
          src={PostSurgeryImage}
          alt={t('altText.brostoperationerPostSurgery')}
          className="max-h-svh object-cover object-center"
        />

        <SimpleCard
          bgColor={BgColors.White}
          bgPosition="right"
          content={
            <Pillar>
              <H3>{t('brostoperationer.firstReturnVisit.heading1')}</H3>
              <P>{t('brostoperationer.firstReturnVisit.text1')}</P>
              <P>{t('brostoperationer.firstReturnVisit.text2')}</P>

              <H3 className="mt-8">
                {t('brostoperationer.secondReturnVisit.heading1')}
              </H3>
              <P>{t('brostoperationer.secondReturnVisit.text1')}</P>
            </Pillar>
          }
        />

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

        <Pillar id="forberedelser">
          <SpaceContainer spaceVertically>
            <H2>{t('brostoperationer.beforeOperation')}</H2>
            <P>{t('brostoperationer.thingsToConsiderBeforeSurgery')}</P>
            <Accordion items={beforeOperationItems} />
          </SpaceContainer>

          <SpaceContainer spaceVertically>
            <H2>{t('brostoperationer.afterOperation')}</H2>
            <Accordion items={afterOperationItems} />
          </SpaceContainer>

          <SpaceContainer spaceVertically>
            <H2>{t('brostoperationer.aftercare')}</H2>
            <Accordion items={aftercareItems} />
          </SpaceContainer>

          <SpaceContainer spaceVertically>
            <H2>{t('brostoperationer.afterFirstReturnVisit')}</H2>
            <Accordion items={afterFirstReturnVisitItems} />
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Brostoperationer
