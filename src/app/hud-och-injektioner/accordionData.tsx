import { useTranslations } from 'next-intl'

import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'

export const useAccordionItems = () => {
  const t = useTranslations()
  const treatmentAreasItems = [
    {
      id: 'frownLines',
      title: t('hudochinjektioner.treatmentAreas.accordion.frownLines.heading'),
      content: (
        <>
          <P>
            {t('hudochinjektioner.treatmentAreas.accordion.frownLines.text1')}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.frownLines.treatment.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.frownLines.treatment.text1'
            )}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.frownLines.effect.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.frownLines.effect.text1'
            )}
          </P>
        </>
      )
    },
    {
      id: 'forehead',
      title: t('hudochinjektioner.treatmentAreas.accordion.forehead.heading'),
      content: (
        <>
          <P>
            {t('hudochinjektioner.treatmentAreas.accordion.forehead.text1')}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.forehead.treatment.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.forehead.treatment.text1'
            )}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.forehead.effect.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.forehead.effect.text1'
            )}
          </P>
        </>
      )
    },
    {
      id: 'crowFeet',
      title: t('hudochinjektioner.treatmentAreas.accordion.crowFeet.heading'),
      content: (
        <>
          <P>
            {t('hudochinjektioner.treatmentAreas.accordion.crowFeet.text1')}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.crowFeet.treatment.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.crowFeet.treatment.text1'
            )}
          </P>

          <H3>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.crowFeet.effect.heading'
            )}
          </H3>
          <P>
            {t(
              'hudochinjektioner.treatmentAreas.accordion.crowFeet.effect.text1'
            )}
          </P>
        </>
      )
    }
  ]

  const otherAreasItems = [
    {
      id: 'eyeBrow',
      title: t('hudochinjektioner.otherAreas.accordion.eyeBrow.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.eyeBrow.text1')}</P>
      )
    },
    {
      id: 'mouthCorner',
      title: t('hudochinjektioner.otherAreas.accordion.mouthCorner.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.mouthCorner.text1')}</P>
      )
    },
    {
      id: 'nose',
      title: t('hudochinjektioner.otherAreas.accordion.nose.heading'),
      content: <P>{t('hudochinjektioner.otherAreas.accordion.nose.text1')}</P>
    },
    {
      id: 'lipFlip',
      title: t('hudochinjektioner.otherAreas.accordion.lipFlip.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.lipFlip.text1')}</P>
      )
    },
    {
      id: 'gummySmile',
      title: t('hudochinjektioner.otherAreas.accordion.gummySmile.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.gummySmile.text1')}</P>
      )
    },
    {
      id: 'chin',
      title: t('hudochinjektioner.otherAreas.accordion.chin.heading'),
      content: <P>{t('hudochinjektioner.otherAreas.accordion.chin.text1')}</P>
    },
    {
      id: 'neck',
      title: t('hudochinjektioner.otherAreas.accordion.neck.heading'),
      content: <P>{t('hudochinjektioner.otherAreas.accordion.neck.text1')}</P>
    },
    {
      id: 'bruxism',
      title: t('hudochinjektioner.otherAreas.accordion.bruxism.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.bruxism.text1')}</P>
      )
    },
    {
      id: 'headache',
      title: t('hudochinjektioner.otherAreas.accordion.headache.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.headache.text1')}</P>
      )
    },
    {
      id: 'sweating',
      title: t('hudochinjektioner.otherAreas.accordion.sweating.heading'),
      content: (
        <P>{t('hudochinjektioner.otherAreas.accordion.sweating.text1')}</P>
      )
    }
  ]

  return [treatmentAreasItems, otherAreasItems]
}
