import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { BgColors } from '@/app/types'
import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { AnchorLink } from '@/components/typography/AnchorLink'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import ImplantatImage from '@/public/images/_N3A0080.jpg'
import PolytechImage from '@/public/images/N3A7270_cut.png'
import ImplantatVariansImage from '@/public/images/teardrop-runda-implantat-1000px.jpg'

import { useAccordionItems } from './accordionData'

const Implantaten = () => {
  const t = useTranslations()
  const [
    accordion1Items,
    accordion2Items,
    accordion3Items,
    accordion4Items,
    accordion5Items,
    accordion6Items,
    accordion7Items
  ] = useAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('implantaten.title')}</H1>
            <P white>{t('implantaten.text1')}</P>
          </Pillar>
        }
      />

      <SpaceContainer>
        <Pillar>
          <Image
            src={ImplantatImage}
            alt={t('altText.brostoperationerDayOfSurgery')}
            className="max-h-svh object-cover object-center"
          />
        </Pillar>

        <Card
          bgColor={BgColors.White}
          bgPosition="left-top"
          content={
            <Pillar>
              <P>{t('implantaten.text2')}</P>
              <Accordion items={accordion1Items} />
            </Pillar>
          }
        />

        <Card
          bgColor={BgColors.White}
          bgPosition="right"
          content={
            <Pillar noPadding>
              <P>
                {t.rich('implantaten.readMore', {
                  link: (chunks) => (
                    <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
                  ),
                  link2: (chunks) => (
                    <AnchorLink href="#anatomiska-implantat">
                      {chunks}
                    </AnchorLink>
                  )
                })}
              </P>
              <P>{t('implantaten.text3')}</P>

              <SpaceContainer noPadding spaceTop>
                <H2>{t('implantaten.jelly')}</H2>
                <Accordion items={accordion2Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop id="runda-implantat">
                <H2>{t('implantaten.roundImplants')}</H2>
                <Accordion items={accordion3Items} />
              </SpaceContainer>
            </Pillar>
          }
        />

        <Pillar>
          <P className="text-center">
            {'Ett runt och ett anatomiskt implantat'}
          </P>
          <Image
            src={ImplantatVariansImage}
            alt={t('altText.brostoperationerDayOfSurgery')}
            className="max-h-svh object-cover object-center"
          />
        </Pillar>

        <Card
          bgColor={BgColors.White}
          bgPosition="left"
          content={
            <Pillar noPadding>
              <SpaceContainer noPadding id="anatomiska-implantat">
                <H2>{t('implantaten.anatomic')}</H2>
                <Accordion items={accordion4Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H2>{t('implantaten.ourImplants')}</H2>
                <H3>{t('implantaten.motiva.heading')}</H3>
                <P>{t('implantaten.motiva.text1')}</P>
                <Accordion items={accordion5Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H3>{t('implantaten.mentor.heading')}</H3>
                <P>{t('implantaten.mentor.text1')}</P>
                <P>{t('implantaten.mentor.text2')}</P>
                <Accordion items={accordion6Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H3>{t('implantaten.polytech.heading')}</H3>
                <P>{t('implantaten.polytech.text1')}</P>
                <Accordion items={accordion7Items} />
                <Image
                  src={PolytechImage}
                  alt={t('altText.polytechimplants')}
                  className="max-h-svh object-cover object-center"
                />
              </SpaceContainer>
            </Pillar>
          }
        />
      </SpaceContainer>
    </>
  )
}

export default Implantaten
