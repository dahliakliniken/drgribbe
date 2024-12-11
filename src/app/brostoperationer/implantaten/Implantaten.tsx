import ProjectionImage from '../../../../public/images/mentor-projektion.jpg'
import WidthImage from '../../../../public/images/mentor-bredd.jpg'
import AnatomicalImplantsImage from '../../../../public/images/mentor-anatomiska.jpg'
import FillingImage from '../../../../public/images/mentor-fyllnadsgrad.jpg'
import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { Accordion } from '@/app/components/surfaces/Accordion'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'
import { ImageModal } from '@/app/components/surfaces/ImageModal'
import { H3 } from '@/app/components/typography/H3'
import { AnchorLink } from '@/app/components/typography/AnchorLink'

const Implantaten = () => {
  const t = useTranslations('implantaten')

  const accordionItems = [
    {
      id: 'implants',
      title: t('accordion.roundImplants.title'),
      content: (
        <>
          <P small>{t('accordion.roundImplants.text1')}</P>
          <P small>{t('accordion.roundImplants.text2')}</P>
          <P small>{t('accordion.roundImplants.text3')}</P>
        </>
      )
    },
    {
      id: 'firmness',
      title: t('accordion.firmness.title'),
      content: <P small>{t('accordion.firmness.text1')}</P>
    },
    {
      id: 'projection',
      title: t('accordion.projection.title'),
      content: (
        <>
          <P small>{t('accordion.projection.text1')}</P>
          <P small>{t('accordion.projection.text2')}</P>
          <ImageModal imageSrc={ProjectionImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'width',
      title: t('accordion.width.title'),
      content: (
        <>
          <P small>{t('accordion.width.text1')}</P>
          <ImageModal imageSrc={WidthImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'degreeOfFilling',
      title: t('accordion.degreeOfFilling.title'),
      content: (
        <>
          <P small>{t('accordion.degreeOfFilling.text1')}</P>
          <ImageModal imageSrc={FillingImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'anatomicalImplants',
      title: t('accordion.anatomicalImplants.title'),
      content: (
        <>
          <P small>{t('accordion.anatomicalImplants.text1')}</P>
          <ImageModal
            imageSrc={AnatomicalImplantsImage}
            imageAlt={'imageAlt'}
          />
        </>
      )
    }
  ]

  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer>
        <Pillar>
          <Section>
            <H1>{t('title')}</H1>
            <P>{t('text1')}</P>
            <P>{t('text2')}</P>
          </Section>

          <Section>
            <ol>
              <li>
                <H2>{t('listItem1.heading')}</H2>
                <P>{t('listItem1.text1')}</P>
                <P>{t('listItem1.text2')}</P>
                <P>{t('listItem1.text3')}</P>
              </li>

              <li>
                <H2>{t('listItem2.heading')}</H2>
                <P>{t('listItem2.text1')}</P>
              </li>

              <li>
                <H2>{t('listItem3.heading')}</H2>
                <P>{t('listItem3.text1')}</P>
              </li>

              <li>
                <H2>{t('listItem4.heading')}</H2>
                <P>{t('listItem4.text1')}</P>
              </li>

              <li>
                <H2>{t('listItem5.heading')}</H2>
                <P>{t('listItem4.text1')}</P>

                <H3>{t('listItem5.smoothSurface.title')}</H3>
                <P>{t('listItem5.smoothSurface.text1')}</P>

                <H3>{t('listItem5.texturedSurface.title')}</H3>
                <P>{t('listItem5.texturedSurface.text1')}</P>
                <P>{t('listItem5.texturedSurface.text2')}</P>

                <H3>{t('listItem5.nanoTexturedSurface.title')}</H3>
                <P>{t('listItem5.nanoTexturedSurface.text1')}</P>

                <H3>{t('listItem5.polyuretan.title')}</H3>
                <P>{t('listItem5.polyuretan.text1')}</P>
              </li>
            </ol>
            <P>
              {t.rich('readMore', {
                link: (chunks) => (
                  <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
                ),
                link2: (chunks) => (
                  <AnchorLink href="#anatomiska-implantat">{chunks}</AnchorLink>
                )
              })}
            </P>
            <P>{t('text3')}</P>
          </Section>

          <Section>
            <H2>{t('jelly.title')}</H2>
            <P>{t('jelly.text1')}</P>
          </Section>

          <Section id="runda-implantat">
            <H2>{t('roundImplants.title')}</H2>
            <P>{t('roundImplants.text1')}</P>
            <P>{t('roundImplants.text2')}</P>
          </Section>

          <Section>
            <H2>{t('projection.title')}</H2>
            <P>{t('projection.text1')}</P>
            <P>{t('projection.text2')}</P>
            <P>{t('projection.text3')}</P>
          </Section>

          <Section>
            <H2>{t('width.title')}</H2>
            <P>{t('width.text1')}</P>
          </Section>

          <Section>
            <H2>{t('content.title')}</H2>
            <P>{t('content.text1')}</P>
          </Section>

          <Section>
            <H2>{t('surface.title')}</H2>
            <P>{t('surface.text1')}</P>
            <P>{t('surface.text2')}</P>
          </Section>

          <Section id="anatomiska-implantat">
            <H2>{t('anatomic.title')}</H2>
            <P>{t('anatomic.text1')}</P>
          </Section>

          <Section>
            <H3>{t('anatomic.measurements.title')}</H3>
            <P>{t('anatomic.measurements.text1')}</P>
          </Section>

          <Section>
            <H3>{t('anatomic.projections.title')}</H3>
            <P>{t('anatomic.projections.text1')}</P>
          </Section>

          <Section>
            <H3>{t('anatomic.content.title')}</H3>
            <P>{t('anatomic.content.text1')}</P>
            <P>{t('anatomic.content.text2')}</P>
          </Section>

          <Section>
            <H3>{t('anatomic.surface.title')}</H3>
            <P>{t('anatomic.surface.text1')}</P>
          </Section>

          <Section>
            <H3>{t('anatomic.results.title')}</H3>
            <P>
              {t.rich('anatomic.results.text1', {
                link: (chunks) => (
                  <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
                )
              })}
            </P>
          </Section>

          <Accordion items={accordionItems} />
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Implantaten
