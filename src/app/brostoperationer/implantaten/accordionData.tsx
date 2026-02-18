import { useTranslations } from 'next-intl'

import { ImageModal } from '@/components/surfaces/ImageModal'
import { AnchorLink } from '@/components/typography/AnchorLink'
import { P } from '@/components/typography/P'
import MotivaTableImage from '@/public/images/motiva-tabell.jpg'

export const useAccordionItems = () => {
  const t = useTranslations('implantaten.page')

  const accordion1Items = [
    {
      id: '1-content',
      title: t('accordions.fundamentals.content.title'),
      content: (
        <>
          <P>{t('accordions.fundamentals.content.paragraph1')}</P>
          <P>{t('accordions.fundamentals.content.paragraph2')}</P>
          <P>{t('accordions.fundamentals.content.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'fullness',
      title: t('accordions.fundamentals.fullness.title'),
      content: (
        <>
          <P>{t('accordions.fundamentals.fullness.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'shell',
      title: t('accordions.fundamentals.shell.title'),
      content: (
        <>
          <P>{t('accordions.fundamentals.shell.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'form',
      title: t('accordions.fundamentals.fullness.title'),
      content: (
        <>
          <P>{t('accordions.fundamentals.fullness.paragraph1')}</P>
        </>
      )
    },
    {
      id: '1-surface',
      title: t('accordions.fundamentals.surface.title'),
      content: <P>{t('accordions.fundamentals.surface.paragraph1')}</P>
    },
    {
      id: 'smoothSurface',
      title: t('accordions.fundamentals.smoothSurface.title'),
      content: <P>{t('accordions.fundamentals.smoothSurface.paragraph1')}</P>
    },
    {
      id: 'texturedSurface',
      title: t('accordions.fundamentals.texturedSurface.title'),
      content: (
        <>
          <P>{t('accordions.fundamentals.texturedSurface.paragraph1')}</P>
          <P>{t('accordions.fundamentals.texturedSurface.paragraph2')}</P>
          <P>{t('accordions.fundamentals.texturedSurface.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'nanoTexturedSurface',
      title: t('accordions.fundamentals.nanoTexturedSurface.title'),
      content: <P>{t('accordions.fundamentals.nanoTexturedSurface.paragraph1')}</P>
    },
    {
      id: 'polyuretan',
      title: t('accordions.fundamentals.polyuretan.title'),
      content: <P>{t('accordions.fundamentals.polyuretan.paragraph1')}</P>
    }
  ]

  const accordion2Items = [
    {
      id: 'jelly',
      title: t('accordions.jelly.description.title'),
      content: <P>{t('accordions.jelly.description.paragraph1')}</P>
    }
  ]

  const accordion3Items = [
    {
      id: 'roundImplants',
      title: t('accordions.roundImplants.description.title'),
      content: (
        <>
          <P>{t('accordions.roundImplants.description.paragraph1')}</P>
          <P>{t('accordions.roundImplants.description.paragraph2')}</P>
        </>
      )
    },
    {
      id: 'projection',
      title: t('accordions.roundImplants.projection.title'),
      content: (
        <>
          <P>{t('accordions.roundImplants.projection.paragraph1')}</P>
          <P>{t('accordions.roundImplants.projection.paragraph2')}</P>
          <P>{t('accordions.roundImplants.projection.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'width',
      title: t('accordions.roundImplants.width.title'),
      content: <P>{t('accordions.roundImplants.width.paragraph1')}</P>
    },
    {
      id: '3-content',
      title: t('accordions.roundImplants.content.title'),
      content: <P>{t('accordions.roundImplants.content.paragraph1')}</P>
    },
    {
      id: '3-surface',
      title: t('accordions.roundImplants.surface.title'),
      content: (
        <>
          <P>
            {t.rich('accordions.roundImplants.surface.paragraph1', {
              link: (chunks) => (
                <AnchorLink href="#accordion-1-surface">{chunks}</AnchorLink>
              )
            })}
          </P>
          <P>{t('accordions.roundImplants.surface.paragraph2')}</P>
        </>
      )
    }
  ]

  const accordion4Items = [
    {
      id: 'anatomic',
      title: t('accordions.anatomic.description.title'),
      content: <P>{t('accordions.anatomic.description.paragraph1')}</P>
    },
    {
      id: 'measurements',
      title: t('accordions.anatomic.measurements.title'),
      content: <P>{t('accordions.anatomic.measurements.paragraph1')}</P>
    },
    {
      id: 'projections',
      title: t('accordions.anatomic.projections.title'),
      content: <P>{t('accordions.anatomic.projections.paragraph1')}</P>
    },
    {
      id: '4-content',
      title: t('accordions.anatomic.content.title'),
      content: (
        <>
          <P>{t('accordions.anatomic.content.paragraph1')}</P>
          <P>{t('accordions.anatomic.content.paragraph2')}</P>
        </>
      )
    },
    {
      id: '4-surface',
      title: t('accordions.anatomic.surface.title'),
      content: <P>{t('accordions.anatomic.surface.paragraph1')}</P>
    },
    {
      id: 'results',
      title: t('accordions.anatomic.results.title'),
      content: (
        <P>
          {t.rich('accordions.anatomic.results.paragraph1', {
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
      title: t('accordions.motiva.formAndProfiles.title'),
      content: (
        <>
          <P>{t('accordions.motiva.formAndProfiles.paragraph1')}</P>
          <ImageModal imageSrc={MotivaTableImage} imageAlt={t('altText.motiva-table')} />
        </>
      )
    },
    {
      id: '5-filling',
      title: t('accordions.motiva.filling.title'),
      content: (
        <>
          <P>{t('accordions.motiva.filling.paragraph1')}</P>
          <P>
            {t.rich('accordions.motiva.filling.paragraph2', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('accordions.motiva.filling.paragraph3', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('accordions.motiva.filling.paragraph4', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
        </>
      )
    },
    {
      id: '5-surface',
      title: t('accordions.motiva.surface.title'),
      content: <P>{t('accordions.motiva.surface.paragraph1')}</P>
    }
  ]

  const accordion6Items = [
    {
      id: '6-formAndProfiles',
      title: t('accordions.mentor.formAndProfiles.title'),
      content: (
        <>
          <P>{t('accordions.mentor.formAndProfiles.paragraph1')}</P>
          <P>{t('accordions.mentor.formAndProfiles.paragraph2')}</P>
          <P>{t('accordions.mentor.formAndProfiles.paragraph3')}</P>
        </>
      )
    },
    {
      id: '6-filling',
      title: t('accordions.mentor.filling.title'),
      content: (
        <>
          <P>{t('accordions.mentor.filling.paragraph1')}</P>
          <P>{t('accordions.mentor.filling.paragraph2')}</P>
          <P>{t('accordions.mentor.filling.paragraph3')}</P>
        </>
      )
    },
    {
      id: '6-surface',
      title: t('accordions.mentor.surface.title'),
      content: (
        <>
          <P>{t('accordions.mentor.surface.paragraph1')}</P>
        </>
      )
    }
  ]

  const accordion7Items = [
    {
      id: '7-formAndProfiles',
      title: t('accordions.polytech.formAndProfiles.title'),
      content: (
        <>
          <P>{t('accordions.polytech.formAndProfiles.paragraph1')}</P>
          <P>{t('accordions.polytech.formAndProfiles.paragraph2')}</P>
          <P>{t('accordions.polytech.formAndProfiles.paragraph3')}</P>
        </>
      )
    },
    {
      id: '7-filling',
      title: t('accordions.polytech.filling.title'),
      content: <P>{t('accordions.polytech.filling.paragraph1')}</P>
    },
    {
      id: '7-surface',
      title: t('accordions.polytech.surface.title'),
      content: (
        <>
          <P>{t('accordions.polytech.surface.paragraph1')}</P>
          <P>{t('accordions.polytech.surface.paragraph2')}</P>
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
