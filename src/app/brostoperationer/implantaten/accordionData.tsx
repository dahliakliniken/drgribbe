import { useTranslations } from 'next-intl'

import { ImageModal } from '@/components/surfaces/ImageModal'
import { AnchorLink } from '@/components/typography/AnchorLink'
import { P } from '@/components/typography/P'
import MotivaTableImage from '@/public/images/motiva-tabell.jpg'

export const useAccordionItems = () => {
  const t = useTranslations('implantaten.page.accordions')
  const tAlt = useTranslations('altText')

  const accordion1Items = [
    {
      id: '1-content',
      title: t('fundamentals.content.title'),
      content: (
        <>
          <P>{t('fundamentals.content.paragraph1')}</P>
          <P>{t('fundamentals.content.paragraph2')}</P>
          <P>{t('fundamentals.content.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'fullness',
      title: t('fundamentals.fullness.title'),
      content: (
        <>
          <P>{t('fundamentals.fullness.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'shell',
      title: t('fundamentals.shell.title'),
      content: (
        <>
          <P>{t('fundamentals.shell.paragraph1')}</P>
        </>
      )
    },
    {
      id: 'form',
      title: t('fundamentals.fullness.title'),
      content: (
        <>
          <P>{t('fundamentals.fullness.paragraph1')}</P>
        </>
      )
    },
    {
      id: '1-surface',
      title: t('fundamentals.surface.title'),
      content: <P>{t('fundamentals.surface.paragraph1')}</P>
    },
    {
      id: 'smoothSurface',
      title: t('fundamentals.smoothSurface.title'),
      content: <P>{t('fundamentals.smoothSurface.paragraph1')}</P>
    },
    {
      id: 'texturedSurface',
      title: t('fundamentals.texturedSurface.title'),
      content: (
        <>
          <P>{t('fundamentals.texturedSurface.paragraph1')}</P>
          <P>{t('fundamentals.texturedSurface.paragraph2')}</P>
          <P>{t('fundamentals.texturedSurface.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'nanoTexturedSurface',
      title: t('fundamentals.nanoTexturedSurface.title'),
      content: <P>{t('fundamentals.nanoTexturedSurface.paragraph1')}</P>
    },
    {
      id: 'polyuretan',
      title: t('fundamentals.polyuretan.title'),
      content: <P>{t('fundamentals.polyuretan.paragraph1')}</P>
    }
  ]

  const accordion2Items = [
    {
      id: 'jelly',
      title: t('jelly.description.title'),
      content: <P>{t('jelly.description.paragraph1')}</P>
    }
  ]

  const accordion3Items = [
    {
      id: 'roundImplants',
      title: t('roundImplants.description.title'),
      content: (
        <>
          <P>{t('roundImplants.description.paragraph1')}</P>
          <P>{t('roundImplants.description.paragraph2')}</P>
        </>
      )
    },
    {
      id: 'projection',
      title: t('roundImplants.projection.title'),
      content: (
        <>
          <P>{t('roundImplants.projection.paragraph1')}</P>
          <P>{t('roundImplants.projection.paragraph2')}</P>
          <P>{t('roundImplants.projection.paragraph3')}</P>
        </>
      )
    },
    {
      id: 'width',
      title: t('roundImplants.width.title'),
      content: <P>{t('roundImplants.width.paragraph1')}</P>
    },
    {
      id: '3-content',
      title: t('roundImplants.content.title'),
      content: <P>{t('roundImplants.content.paragraph1')}</P>
    },
    {
      id: '3-surface',
      title: t('roundImplants.surface.title'),
      content: (
        <>
          <P>
            {t.rich('roundImplants.surface.paragraph1', {
              link: (chunks) => (
                <AnchorLink href="#accordion-1-surface">{chunks}</AnchorLink>
              )
            })}
          </P>
          <P>{t('roundImplants.surface.paragraph2')}</P>
        </>
      )
    }
  ]

  const accordion4Items = [
    {
      id: 'anatomic',
      title: t('anatomic.description.title'),
      content: <P>{t('anatomic.description.paragraph1')}</P>
    },
    {
      id: 'measurements',
      title: t('anatomic.measurements.title'),
      content: <P>{t('anatomic.measurements.paragraph1')}</P>
    },
    {
      id: 'projections',
      title: t('anatomic.projections.title'),
      content: <P>{t('anatomic.projections.paragraph1')}</P>
    },
    {
      id: '4-content',
      title: t('anatomic.content.title'),
      content: (
        <>
          <P>{t('anatomic.content.paragraph1')}</P>
          <P>{t('anatomic.content.paragraph2')}</P>
        </>
      )
    },
    {
      id: '4-surface',
      title: t('anatomic.surface.title'),
      content: <P>{t('anatomic.surface.paragraph1')}</P>
    },
    {
      id: 'results',
      title: t('anatomic.results.title'),
      content: (
        <P>
          {t.rich('anatomic.results.paragraph1', {
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
      title: t('motiva.formAndProfiles.title'),
      content: (
        <>
          <P>{t('motiva.formAndProfiles.paragraph1')}</P>
          <ImageModal imageSrc={MotivaTableImage} imageAlt={tAlt('motivaTable')} />
        </>
      )
    },
    {
      id: '5-filling',
      title: t('motiva.filling.title'),
      content: (
        <>
          <P>{t('motiva.filling.paragraph1')}</P>
          <P>
            {t.rich('motiva.filling.paragraph2', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('motiva.filling.paragraph3', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
          <P>
            {t.rich('motiva.filling.paragraph4', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </P>
        </>
      )
    },
    {
      id: '5-surface',
      title: t('motiva.surface.title'),
      content: <P>{t('motiva.surface.paragraph1')}</P>
    }
  ]

  const accordion6Items = [
    {
      id: '6-formAndProfiles',
      title: t('mentor.formAndProfiles.title'),
      content: (
        <>
          <P>{t('mentor.formAndProfiles.paragraph1')}</P>
          <P>{t('mentor.formAndProfiles.paragraph2')}</P>
          <P>{t('mentor.formAndProfiles.paragraph3')}</P>
        </>
      )
    },
    {
      id: '6-filling',
      title: t('mentor.filling.title'),
      content: (
        <>
          <P>{t('mentor.filling.paragraph1')}</P>
          <P>{t('mentor.filling.paragraph2')}</P>
          <P>{t('mentor.filling.paragraph3')}</P>
        </>
      )
    },
    {
      id: '6-surface',
      title: t('mentor.surface.title'),
      content: (
        <>
          <P>{t('mentor.surface.paragraph1')}</P>
        </>
      )
    }
  ]

  const accordion7Items = [
    {
      id: '7-formAndProfiles',
      title: t('polytech.formAndProfiles.title'),
      content: (
        <>
          <P>{t('polytech.formAndProfiles.paragraph1')}</P>
          <P>{t('polytech.formAndProfiles.paragraph2')}</P>
          <P>{t('polytech.formAndProfiles.paragraph3')}</P>
        </>
      )
    },
    {
      id: '7-filling',
      title: t('polytech.filling.title'),
      content: <P>{t('polytech.filling.paragraph1')}</P>
    },
    {
      id: '7-surface',
      title: t('polytech.surface.title'),
      content: (
        <>
          <P>{t('polytech.surface.paragraph1')}</P>
          <P>{t('polytech.surface.paragraph2')}</P>
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
