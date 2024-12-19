import ProjectionImage from '../../../../public/images/mentor-projektion.jpg'
import WidthImage from '../../../../public/images/mentor-bredd.jpg'
import AnatomicalImplantsImage from '../../../../public/images/mentor-anatomiska.jpg'
import MotivaTableImage from '../../../../public/images/motiva-tabell.jpg'
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
  const t = useTranslations()

  const accordionItems = [
    {
      id: 'implants',
      title: t('implantaten.accordion.roundImplants.title'),
      content: (
        <>
          <P small>{t('implantaten.accordion.roundImplants.text1')}</P>
          <P small>{t('implantaten.accordion.roundImplants.text2')}</P>
          <P small>{t('implantaten.accordion.roundImplants.text3')}</P>
        </>
      )
    },
    {
      id: 'firmness',
      title: t('implantaten.accordion.firmness.title'),
      content: <P small>{t('implantaten.accordion.firmness.text1')}</P>
    },
    {
      id: 'projection',
      title: t('implantaten.accordion.projection.title'),
      content: (
        <>
          <P small>{t('implantaten.accordion.projection.text1')}</P>
          <P small>{t('implantaten.accordion.projection.text2')}</P>
          <ImageModal imageSrc={ProjectionImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'width',
      title: t('implantaten.accordion.width.title'),
      content: (
        <>
          <P small>{t('implantaten.accordion.width.text1')}</P>
          <ImageModal imageSrc={WidthImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'degreeOfFilling',
      title: t('implantaten.accordion.degreeOfFilling.title'),
      content: (
        <>
          <P small>{t('implantaten.accordion.degreeOfFilling.text1')}</P>
          <ImageModal imageSrc={FillingImage} imageAlt={'imageAlt'} />
        </>
      )
    },
    {
      id: 'anatomicalImplants',
      title: t('implantaten.accordion.anatomicalImplants.title'),
      content: (
        <>
          <P small>{t('implantaten.accordion.anatomicalImplants.text1')}</P>
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
            <H1>{t('implantaten.title')}</H1>
            <P>{t('implantaten.text1')}</P>
            <P>{t('implantaten.text2')}</P>
          </Section>

          <Section>
            <ol className="list-decimal space-y-6 pl-6 marker:text-3xl marker:text-coral">
              <li>
                <H2>{t('implantaten.listItem1.heading')}</H2>
                <P>{t('implantaten.listItem1.text1')}</P>
                <P>{t('implantaten.listItem1.text2')}</P>
                <P>{t('implantaten.listItem1.text3')}</P>
              </li>

              <li>
                <H2>{t('implantaten.listItem2.heading')}</H2>
                <P>{t('implantaten.listItem2.text1')}</P>
              </li>

              <li>
                <H2>{t('implantaten.listItem3.heading')}</H2>
                <P>{t('implantaten.listItem3.text1')}</P>
              </li>

              <li>
                <H2>{t('implantaten.listItem4.heading')}</H2>
                <P>{t('implantaten.listItem4.text1')}</P>
              </li>

              <li>
                <H2>{t('implantaten.listItem5.heading')}</H2>
                <P>{t('implantaten.listItem4.text1')}</P>

                <H3>{t('implantaten.listItem5.smoothSurface.title')}</H3>
                <P>{t('implantaten.listItem5.smoothSurface.text1')}</P>

                <H3>{t('implantaten.listItem5.texturedSurface.title')}</H3>
                <P>{t('implantaten.listItem5.texturedSurface.text1')}</P>
                <P>{t('implantaten.listItem5.texturedSurface.text2')}</P>

                <H3>{t('implantaten.listItem5.nanoTexturedSurface.title')}</H3>
                <P>{t('implantaten.listItem5.nanoTexturedSurface.text1')}</P>

                <H3>{t('implantaten.listItem5.polyuretan.title')}</H3>
                <P>{t('implantaten.listItem5.polyuretan.text1')}</P>
              </li>
            </ol>
            <P>
              {t.rich('implantaten.readMore', {
                link: (chunks) => (
                  <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
                ),
                link2: (chunks) => (
                  <AnchorLink href="#anatomiska-implantat">{chunks}</AnchorLink>
                )
              })}
            </P>
            <P>{t('implantaten.text3')}</P>
          </Section>

          <Section>
            <H2>{t('implantaten.jelly.title')}</H2>
            <P>{t('implantaten.jelly.text1')}</P>
          </Section>

          <Section id="runda-implantat">
            <H2>{t('implantaten.roundImplants.title')}</H2>
            <P>{t('implantaten.roundImplants.text1')}</P>
            <P>{t('implantaten.roundImplants.text2')}</P>
          </Section>

          <Section>
            <H2>{t('implantaten.projection.title')}</H2>
            <P>{t('implantaten.projection.text1')}</P>
            <P>{t('implantaten.projection.text2')}</P>
            <P>{t('implantaten.projection.text3')}</P>
          </Section>

          <Section>
            <H2>{t('implantaten.width.title')}</H2>
            <P>{t('implantaten.width.text1')}</P>
          </Section>

          <Section>
            <H2>{t('implantaten.content.title')}</H2>
            <P>{t('implantaten.content.text1')}</P>
          </Section>

          <Section>
            <H2>{t('implantaten.surface.title')}</H2>
            <P>{t('implantaten.surface.text1')}</P>
            <P>{t('implantaten.surface.text2')}</P>
          </Section>

          <Section id="anatomiska-implantat">
            <H2>{t('implantaten.anatomic.title')}</H2>
            <P>{t('implantaten.anatomic.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.anatomic.measurements.title')}</H3>
            <P>{t('implantaten.anatomic.measurements.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.anatomic.projections.title')}</H3>
            <P>{t('implantaten.anatomic.projections.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.anatomic.content.title')}</H3>
            <P>{t('implantaten.anatomic.content.text1')}</P>
            <P>{t('implantaten.anatomic.content.text2')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.anatomic.surface.title')}</H3>
            <P>{t('implantaten.anatomic.surface.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.anatomic.results.title')}</H3>
            <P>
              {t.rich('implantaten.anatomic.results.text1', {
                link: (chunks) => (
                  <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
                )
              })}
            </P>
          </Section>

          <Section>
            <H2>{t('implantaten.ourImplants.title')}</H2>
            <H3>{t('implantaten.ourImplants.motiva.title')}</H3>
            <P>{t('implantaten.ourImplants.motiva.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.motiva.formAndProfiles.title')}</H3>

            <P>{t('implantaten.ourImplants.motiva.formAndProfiles.text1')}</P>

            <ImageModal
              imageSrc={MotivaTableImage}
              imageAlt={t('altText.motivaTable')}
            />
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.motiva.filling.title')}</H3>
            <P>{t('implantaten.ourImplants.motiva.filling.text1')}</P>
            <P>
              {t.rich('implantaten.ourImplants.motiva.filling.text2', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
            <P>
              {t.rich('implantaten.ourImplants.motiva.filling.text3', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
            <P>
              {t.rich('implantaten.ourImplants.motiva.filling.text4', {
                strong: (chunks) => <strong>{chunks}</strong>
              })}
            </P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.motiva.surface.title')}</H3>
            <P>{t('implantaten.ourImplants.motiva.surface.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.mentor.title')}</H3>
            <P>{t('implantaten.ourImplants.mentor.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.mentor.formAndProfiles.title')}</H3>
            <P>{t('implantaten.ourImplants.mentor.formAndProfiles.text1')}</P>
            <P>{t('implantaten.ourImplants.mentor.formAndProfiles.text2')}</P>
            <P>{t('implantaten.ourImplants.mentor.formAndProfiles.text3')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.mentor.filling.title')}</H3>
            <P>{t('implantaten.ourImplants.mentor.filling.text1')}</P>
            <P>{t('implantaten.ourImplants.mentor.filling.text2')}</P>
            <P>{t('implantaten.ourImplants.mentor.filling.text3')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.mentor.surface.title')}</H3>
            <P>{t('implantaten.ourImplants.mentor.surface.text1')}</P>
            <P>{t('implantaten.ourImplants.mentor.surface.text2')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.polytech.title')}</H3>
            <P>{t('implantaten.ourImplants.polytech.text1')}</P>
          </Section>

          <Section>
            <H3>
              {t('implantaten.ourImplants.polytech.formAndProfiles.title')}
            </H3>
            <P>{t('implantaten.ourImplants.polytech.formAndProfiles.text1')}</P>
            <P>{t('implantaten.ourImplants.polytech.formAndProfiles.text2')}</P>
            <P>{t('implantaten.ourImplants.polytech.formAndProfiles.text3')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.polytech.filling.title')}</H3>
            <P>{t('implantaten.ourImplants.polytech.filling.text1')}</P>
          </Section>

          <Section>
            <H3>{t('implantaten.ourImplants.polytech.surface.title')}</H3>
            <P>{t('implantaten.ourImplants.polytech.surface.text1')}</P>
            <P>{t('implantaten.ourImplants.polytech.surface.text2')}</P>
          </Section>

          <Accordion items={accordionItems} />
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Implantaten
