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
import { Button } from '../components/inputs/Button'
import { H3 } from '../components/typography/H3'
import { Section } from '../components/layout/Section'
import { AnchorLink } from '../components/typography/AnchorLink'

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
        <Pillar>
          <SpaceContainer spaceVertically>
            <H2>{t('brostoperationer.heading1')}</H2>
            <Section>
              <H3>{t('brostoperationer.consultation.heading1')}</H3>
              <P>{t('brostoperationer.consultation.text1')}</P>
              <P>{t('brostoperationer.consultation.text2')}</P>
              <P>{t('brostoperationer.consultation.text3')}</P>
              <P>{t('brostoperationer.consultation.text4')}</P>
              <P>{t('brostoperationer.consultation.text5')}</P>
              <P>{t('brostoperationer.consultation.text6')}</P>
              <P>{t('brostoperationer.consultation.text7')}</P>
              <P>{t('brostoperationer.consultation.text8')}</P>
            </Section>

            <Section>
              <H3>{t('brostoperationer.dayOfSurgery.heading1')}</H3>
              <P>{t('brostoperationer.dayOfSurgery.text1')}</P>
              <P>
                {t.rich('brostoperationer.dayOfSurgery.text2', {
                  link: (chunks) => (
                    <AnchorLink href="#forberedelser">{chunks}</AnchorLink>
                  )
                })}
              </P>
              <P>{t('brostoperationer.dayOfSurgery.text3')}</P>
            </Section>

            <Section>
              <H3>{t('brostoperationer.surgery.heading1')}</H3>
              <P>{t('brostoperationer.surgery.text1')}</P>
              <P>{t('brostoperationer.surgery.text2')}</P>
            </Section>

            <Section>
              <H3>{t('brostoperationer.postSurgery.heading1')}</H3>
              <P>{t('brostoperationer.postSurgery.text1')}</P>
              <P>{t('brostoperationer.postSurgery.text2')}</P>
            </Section>

            <Section>
              <H3>{t('brostoperationer.firstReturnVisit.heading1')}</H3>
              <P>{t('brostoperationer.firstReturnVisit.text1')}</P>
              <P>{t('brostoperationer.firstReturnVisit.text2')}</P>
            </Section>

            <Section>
              <H3>{t('brostoperationer.secondReturnVisit.heading1')}</H3>
              <P>{t('brostoperationer.secondReturnVisit.text1')}</P>
            </Section>
          </SpaceContainer>
        </Pillar>

        <SimpleCard
          bgColor={BgColors.Coral}
          bgPosition="left"
          content={
            <>
              <H2 upperCase white className="text-center">
                {t('common.freeConsultation')}
              </H2>
              <div className="m-auto flex max-w-xs justify-center">
                <Button className="uppercase" text={t('common.bookNow')} />
              </div>
            </>
          }
        />

        <Pillar>
          <SpaceContainer spaceVertically>
            <H2 id="forberedelser">{t('brostoperationer.beforeOperation')}</H2>
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
