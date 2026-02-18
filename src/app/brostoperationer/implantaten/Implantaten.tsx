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
  const tPage = useTranslations('implantaten.page')
  const tAlt = useTranslations('altText')
  const tBrostoperationerAlt = useTranslations('brostoperationer.page.altText')
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
            <H1 white>{tPage('hero.title')}</H1>
            <P white>{tPage('hero.paragraph1')}</P>
          </Pillar>
        }
      />

      <SpaceContainer>
        <Pillar>
          <Image
            src={ImplantatImage}
            alt={tBrostoperationerAlt('dayOfSurgery')}
            className="max-h-svh object-cover object-center"
          />
        </Pillar>

        <Card
          bgColor={BgColors.White}
          bgPosition="left-top"
          content={
            <Pillar>
              <P>{tPage('intro.paragraph1')}</P>
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
                {tPage.rich('intro.readMore', {
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
              <P>{tPage('intro.summary')}</P>

              <SpaceContainer noPadding spaceTop>
                <H2>{tPage('sections.jellyTitle')}</H2>
                <Accordion items={accordion2Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop id="runda-implantat">
                <H2>{tPage('sections.roundImplantsTitle')}</H2>
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
            alt={tBrostoperationerAlt('dayOfSurgery')}
            className="max-h-svh object-cover object-center"
          />
        </Pillar>

        <Card
          bgColor={BgColors.White}
          bgPosition="left"
          content={
            <Pillar noPadding>
              <SpaceContainer noPadding id="anatomiska-implantat">
                <H2>{tPage('sections.anatomicTitle')}</H2>
                <Accordion items={accordion4Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H2>{tPage('sections.ourImplantsTitle')}</H2>
                <H3>{tPage('brands.motiva.heading')}</H3>
                <P>{tPage('brands.motiva.paragraph1')}</P>
                <Accordion items={accordion5Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H3>{tPage('brands.mentor.heading')}</H3>
                <P>{tPage('brands.mentor.paragraph1')}</P>
                <P>{tPage('brands.mentor.paragraph2')}</P>
                <Accordion items={accordion6Items} />
              </SpaceContainer>

              <SpaceContainer noPadding spaceTop>
                <H3>{tPage('brands.polytech.heading')}</H3>
                <P>{tPage('brands.polytech.paragraph1')}</P>
                <Accordion items={accordion7Items} />
                <Image
                  src={PolytechImage}
                  alt={tAlt('polytechimplants')}
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
