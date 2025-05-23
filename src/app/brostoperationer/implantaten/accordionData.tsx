import { useTranslations } from 'next-intl'

import { ImageModal } from '@/app/components/surfaces/ImageModal'
import { AnchorLink } from '@/app/components/typography/AnchorLink'
import { P } from '@/app/components/typography/P'

import MotivaTableImage from '../../../../public/images/motiva-tabell.jpg'

export const useAccordionItems = () => {
  const t = useTranslations()
  const accordion1Items = [
    {
      id: '1-content',
      title: t('implantaten.accordion1.content.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion1.content.text1')}</P>
          <P>{t('implantaten.accordion1.content.text2')}</P>
          <P>{t('implantaten.accordion1.content.text3')}</P>
        </>
      )
    },
    {
      id: 'fullness',
      title: t('implantaten.accordion1.fullness.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion1.fullness.text1')}</P>
        </>
      )
    },
    {
      id: 'shell',
      title: t('implantaten.accordion1.shell.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion1.shell.text1')}</P>
        </>
      )
    },
    {
      id: 'form',
      title: t('implantaten.accordion1.fullness.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion1.fullness.text1')}</P>
        </>
      )
    },
    {
      id: '1-surface',
      title: t('implantaten.accordion1.surface.heading'),
      content: <P>{t('implantaten.accordion1.surface.text1')}</P>
    },
    {
      id: 'smoothSurface',
      title: t('implantaten.accordion1.smoothSurface.heading'),
      content: <P>{t('implantaten.accordion1.smoothSurface.text1')}</P>
    },
    {
      id: 'texturedSurface',
      title: t('implantaten.accordion1.texturedSurface.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion1.texturedSurface.text1')}</P>
          <P>{t('implantaten.accordion1.texturedSurface.text2')}</P>
          <P>{t('implantaten.accordion1.texturedSurface.text3')}</P>
        </>
      )
    },
    {
      id: 'nanoTexturedSurface',
      title: t('implantaten.accordion1.nanoTexturedSurface.heading'),
      content: <P>{t('implantaten.accordion1.nanoTexturedSurface.text1')}</P>
    },
    {
      id: 'polyuretan',
      title: t('implantaten.accordion1.polyuretan.heading'),
      content: <P>{t('implantaten.accordion1.polyuretan.text1')}</P>
    }
  ]

  const accordion2Items = [
    {
      id: 'jelly',
      title: t('implantaten.accordion2.jelly.heading'),
      content: <P>{t('implantaten.accordion2.jelly.text1')}</P>
    }
  ]

  const accordion3Items = [
    {
      id: 'roundImplants',
      title: t('implantaten.accordion3.roundImplants.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion3.roundImplants.text1')}</P>
          <P>{t('implantaten.accordion3.roundImplants.text2')}</P>
        </>
      )
    },
    {
      id: 'projection',
      title: t('implantaten.accordion3.projection.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion3.projection.text1')}</P>
          <P>{t('implantaten.accordion3.projection.text2')}</P>
          <P>{t('implantaten.accordion3.projection.text3')}</P>
        </>
      )
    },
    {
      id: 'width',
      title: t('implantaten.accordion3.width.heading'),
      content: <P>{t('implantaten.accordion3.width.text1')}</P>
    },
    {
      id: '3-content',
      title: t('implantaten.accordion3.content.heading'),
      content: <P>{t('implantaten.accordion3.content.text1')}</P>
    },
    {
      id: '3-surface',
      title: t('implantaten.accordion3.surface.heading'),
      content: (
        <>
          <P>
            {t.rich('implantaten.accordion3.surface.text1', {
              link: (chunks) => (
                <AnchorLink href="#accordion-1-surface">{chunks}</AnchorLink>
              )
            })}
          </P>
          <P>{t('implantaten.accordion3.surface.text2')}</P>
        </>
      )
    }
  ]

  const accordion4Items = [
    {
      id: 'anatomic',
      title: t('implantaten.accordion4.anatomic.heading'),
      content: <P>{t('implantaten.accordion4.anatomic.text1')}</P>
    },
    {
      id: 'measurements',
      title: t('implantaten.accordion4.measurements.heading'),
      content: <P>{t('implantaten.accordion4.measurements.text1')}</P>
    },
    {
      id: 'projections',
      title: t('implantaten.accordion4.projections.heading'),
      content: <P>{t('implantaten.accordion4.projections.text1')}</P>
    },
    {
      id: '4-content',
      title: t('implantaten.accordion4.content.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion4.content.text1')}</P>
          <P>{t('implantaten.accordion4.content.text2')}</P>
        </>
      )
    },
    {
      id: '4-surface',
      title: t('implantaten.accordion4.surface.heading'),
      content: <P>{t('implantaten.accordion4.surface.text1')}</P>
    },
    {
      id: 'results',
      title: t('implantaten.accordion4.results.heading'),
      content: (
        <P>
          {t.rich('implantaten.accordion4.results.text1', {
            link: (chunks) => (
              <AnchorLink href="#runda-implantat">{chunks}</AnchorLink>
            )
          })}
        </P>
      )
    }
  ]

  const accordion5Items = [
    {
      id: '5-formAndProfiles',
      title: t('implantaten.accordion5.formAndProfiles.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion5.formAndProfiles.text1')}</P>
          <ImageModal
            imageSrc={MotivaTableImage}
            imageAlt={t('altText.motivaTable')}
          />
        </>
      )
    },
    {
      id: '5-filling',
      title: t('implantaten.accordion5.filling.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion5.filling.text1')}</P>
          <P>
            {t.rich('implantaten.accordion5.filling.text2', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('implantaten.accordion5.filling.text3', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('implantaten.accordion5.filling.text4', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
        </>
      )
    },
    {
      id: '5-surface',
      title: t('implantaten.accordion5.surface.heading'),
      content: <P>{t('implantaten.accordion5.surface.text1')}</P>
    }
  ]

  const accordion6Items = [
    {
      id: '6-formAndProfiles',
      title: t('implantaten.accordion6.formAndProfiles.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion6.formAndProfiles.text1')}</P>
          <P>{t('implantaten.accordion6.formAndProfiles.text2')}</P>
          <P>{t('implantaten.accordion6.formAndProfiles.text3')}</P>
        </>
      )
    },
    {
      id: '6-filling',
      title: t('implantaten.accordion6.filling.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion6.filling.text1')}</P>
          <P>{t('implantaten.accordion6.filling.text2')}</P>
          <P>{t('implantaten.accordion6.filling.text3')}</P>
        </>
      )
    },
    {
      id: '6-surface',
      title: t('implantaten.accordion6.surface.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion6.surface.text1')}</P>
        </>
      )
    }
  ]

  const accordion7Items = [
    {
      id: '7-formAndProfiles',
      title: t('implantaten.accordion7.formAndProfiles.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion7.formAndProfiles.text1')}</P>
          <P>{t('implantaten.accordion7.formAndProfiles.text2')}</P>
          <P>{t('implantaten.accordion7.formAndProfiles.text3')}</P>
        </>
      )
    },
    {
      id: '7-filling',
      title: t('implantaten.accordion7.filling.heading'),
      content: <P>{t('implantaten.accordion7.filling.text1')}</P>
    },
    {
      id: '7-surface',
      title: t('implantaten.accordion7.surface.heading'),
      content: (
        <>
          <P>{t('implantaten.accordion7.surface.text1')}</P>
          <P>{t('implantaten.accordion7.surface.text2')}</P>
        </>
      )
    }
  ]

  return [
    accordion1Items,
    accordion2Items,
    accordion3Items,
    accordion4Items,
    accordion5Items,
    accordion6Items,
    accordion7Items
  ]
}
