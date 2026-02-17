import Image from 'next/image'
import { useMessages, useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { TreatmentBox } from '@/components/layout/TreatmentBox'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { ExpandableTextBox } from '@/components/surfaces/ExpandableTextBox'
import { A } from '@/components/typography/A'
import { AnchorLink } from '@/components/typography/AnchorLink'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import { breastOperationsTreatmentsData } from '@/data/breastOperationsTreatmentsData'
import PostSurgeryImage from '@/public/images/_N3A0162.jpg'
import SurgeryImage from '@/public/images/_N3A0184.jpg'
import DayOfSurgeryImage from '@/public/images/_N3A0187.jpg'
import ConsultationImage from '@/public/images/_N3A7277.jpg'
import aterbesokImage from '@/public/images/_N3A9941.jpg'

import { BgColors } from '../types'
// import belowheadingImage from '@/public/images/_N3A9899.jpg'
import { useAccordionItems } from './accordionData'

const Brostoperationer = () => {
  const t = useTranslations()
  const tPage = useTranslations('brostoperationer.page')
  const messages = useMessages()
  const [surgeryItems, complications] = useAccordionItems()
  const beforeOperationKeys = Object.keys(messages.beforeOperation)
  const afterOperationKeys = Object.keys(messages.afterOperation)
  const aftercareKeys = Object.keys(messages.aftercare)
  const afterFirstReturnVisitKeys = Object.keys(messages.afterFirstReturnVisit)

  const beforeOperationItems = beforeOperationKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3'] // Predefined keys for texts
    const contentArray = contentKeys
      .filter((textKey) => t.has(`beforeOperation.${key}.${textKey}`)) // Filter out texts that don't exist
      .map((textKey) => t(`beforeOperation.${key}.${textKey}`))

    return {
      id: key,
      title: t(`beforeOperation.${key}.title`),
      content: contentArray.join('\n')
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
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <SpaceContainer>
              <H1 white>{tPage('hero.title')}</H1>
              <P white>{tPage('hero.preamble')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />
      {/* <SpaceContainer>
        <Pillar>
          <Image
            src={belowheadingImage}
            alt={t('altText.brostoperationerConsultation')}
            className="max-h-svh object-cover object-center"
          />
        </Pillar>
      </SpaceContainer> */}

      <SpaceContainer spaceTop>
        <div className="m-auto xl:max-w-7xl">
          <TreatmentBox treatments={breastOperationsTreatmentsData} />
        </div>
      </SpaceContainer>

      <SpaceContainer spaceTop noPadding>
        <Card
          bgColor={BgColors.White}
          bgPosition="right"
          content={
            <Pillar>
              <H2>{tPage('process.sectionTitle')}</H2>
              <Image
                src={ConsultationImage}
                alt={t('altText.brostoperationerConsultation')}
                className="max-h-svh object-cover object-center"
              />
              <SpaceContainer noPadding spaceVertically>
                <ExpandableTextBox
                  title={tPage('process.consultation.title')}
                  headingSize="H3"
                  paragraphs={[
                    tPage('process.consultation.paragraph1'),
                    tPage('process.consultation.paragraph2'),
                    tPage('process.consultation.paragraph3'),
                    tPage('process.consultation.paragraph4'),
                    tPage('process.consultation.paragraph5'),
                    tPage('process.consultation.paragraph6'),
                    tPage('process.consultation.paragraph7'),
                    tPage('process.consultation.paragraph8')
                  ]}
                />
              </SpaceContainer>
            </Pillar>
          }
        />
        <Card
          bgColor={BgColors.Green}
          bgPosition="left"
          content={
            <>
              <H2 upperCase white className="text-center">
                {t('common.bookConsultation')}
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

      {/* OPERATIONSDAGEN */}
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Image
              src={DayOfSurgeryImage}
              alt={t('altText.brostoperationerDayOfSurgery')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <H3>{tPage('process.dayOfSurgery.title')}</H3>
              <P>{tPage('process.dayOfSurgery.paragraph1')}</P>
              <P>
                {tPage.rich('process.dayOfSurgery.paragraph2', {
                  link: (chunks) => (
                    <AnchorLink href="#forberedelser">{chunks}</AnchorLink>
                  )
                })}
              </P>
              <P>{tPage('process.dayOfSurgery.paragraph3')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />

      {/* NARKOS&OPERATION */}
      <Card
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <Image
              src={SurgeryImage}
              alt={t('altText.brostoperationerSurgery')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <H3>{tPage('process.surgery.title')}</H3>
              <P>{tPage('process.surgery.intro')}</P>
              <P>{tPage('process.surgery.introContinuation')}</P>
              <Accordion size="h4" items={surgeryItems} />
            </SpaceContainer>
          </Pillar>
        }
      />

      {/* EFTEROPERATION */}
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Image
              src={PostSurgeryImage}
              alt={t('altText.brostoperationerPostSurgery')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <ExpandableTextBox
                title={tPage('process.postSurgery.title')}
                headingSize="H3"
                paragraphs={[
                  tPage('process.postSurgery.paragraph1'),
                  tPage('process.postSurgery.paragraph2'),
                  tPage('process.postSurgery.paragraph3'),
                  tPage('process.postSurgery.paragraph4'),
                  tPage('process.postSurgery.paragraph5'),
                  tPage('process.postSurgery.paragraph6'),
                  tPage('process.postSurgery.paragraph7'),
                  tPage('process.postSurgery.paragraph8'),
                  tPage('process.postSurgery.paragraph9')
                ]}
              />
            </SpaceContainer>
          </Pillar>
        }
      />

      <Card
        bgColor={BgColors.Green}
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
      {/* FÖRSTAÅTERBESÖKET */}
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Image
              src={aterbesokImage}
              alt={t('altText.forstaaterbesoket')}
              className="max-h-svh object-cover object-center"
            />
            <SpaceContainer noPadding spaceTop>
              <H3>{tPage('process.firstReturnVisit.title')}</H3>
              <P>{tPage('process.firstReturnVisit.paragraph1')}</P>
              <P>{tPage('process.firstReturnVisit.paragraph2')}</P>

              <H3 className="mt-8">
                {tPage('process.secondReturnVisit.title')}
              </H3>
              <P>{tPage('process.secondReturnVisit.paragraph1')}</P>
            </SpaceContainer>
          </Pillar>
        }
      />

      {/* Återbesök efter 3-4 månader */}

      <SpaceContainer id="forberedelser">
        <Pillar noPadding>
          <H2>{tPage('preparation.beforeOperationTitle')}</H2>
          <P>{tPage('preparation.beforeOperationIntro')}</P>
          <Accordion items={beforeOperationItems} />

          <SpaceContainer noPadding spaceVertically>
            <H2>{tPage('preparation.afterOperationTitle')}</H2>
            <Accordion items={afterOperationItems} />
          </SpaceContainer>

          <SpaceContainer noPadding spaceVertically>
            <H2>{tPage('preparation.aftercareTitle')}</H2>
            <Accordion items={aftercareItems} />
          </SpaceContainer>

          <SpaceContainer noPadding spaceVertically>
            <H2>{tPage('preparation.afterFirstReturnVisitTitle')}</H2>
            <Accordion items={afterFirstReturnVisitItems} />
          </SpaceContainer>

          <SpaceContainer noPadding spaceVertically>
            <H2>{'Komplikationer'}</H2>
            <Accordion items={complications} />
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <>
            <H2 upperCase white className="text-center">
              {t('common.bookConsultation')}
            </H2>
            <div className="m-auto flex max-w-xs justify-center">
              <A href="/boka" className="uppercase" buttonStyle>
                {t('common.bookNow')}
              </A>
            </div>
          </>
        }
      />
    </>
  )
}

export default Brostoperationer
