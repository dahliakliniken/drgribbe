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
            <P>{t('introduction')}</P>
          </Section>

          <Section>
            <H2>{t('differentFillingLevels.title')}</H2>
            <P>{t('differentFillingLevels.text1')}</P>
            <P>{t('differentFillingLevels.text2')}</P>
          </Section>

          <Section>
            <H2>{t('implantShape.title')}</H2>
            <P>{t('implantShape.text1')}</P>
            <P>{t('implantShape.text2')}</P>
          </Section>

          <Section>
            <H2 id="roundImplants">{t('roundImplants.title')}</H2>
            <P>{t('roundImplants.text1')}</P>
          </Section>

          <Section>
            <H2>{t('projection.title')}</H2>
            <P>{t('projection.text1')}</P>
          </Section>

          <Section>
            <H2>{t('naturalOrUnnatural.title')}</H2>
            <P>{t('naturalOrUnnatural.text1')}</P>
            <P>{t('naturalOrUnnatural.text2')}</P>
            <P>{t('naturalOrUnnatural.text3')}</P>
            <P>{t('naturalOrUnnatural.text4')}</P>
            <P>{t('naturalOrUnnatural.text5')}</P>
          </Section>

          <Section>
            <H2>{t('anatomicalImplants.title')}</H2>
            <P>{t('anatomicalImplants.text1')}</P>
            <P>{t('anatomicalImplants.text2')}</P>
            <P>
              {t.rich('anatomicalImplants.text3', {
                link: (chunks) => (
                  <AnchorLink href="#roundImplants">{chunks}</AnchorLink>
                )
              })}
            </P>
          </Section>

          <Section>
            <H2>{t('naturalVsFake.title')}</H2>
            <P>{t('naturalVsFake.text1')}</P>
            <P>{t('naturalVsFake.text2')}</P>
            <P>{t('naturalVsFake.text3')}</P>
          </Section>

          <Section>
            <H2>{t('mentorImplants.title')}</H2>
            <P>{t('mentorImplants.text1')}</P>
          </Section>

          <Accordion items={accordionItems} />
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Implantaten
