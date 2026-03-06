import { useTranslations } from 'next-intl'

import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'

export const useAccordionItems = () => {
  const tTreatmentAreas = useTranslations(
    'hud-och-injektioner.page.treatmentAreas.accordion'
  )
  const tOtherAreas = useTranslations(
    'hud-och-injektioner.page.otherAreas.accordion'
  )
  const treatmentAreasItems = [
    {
      id: 'frownLines',
      title: tTreatmentAreas('frownLines.heading'),
      content: (
        <>
          <P>{tTreatmentAreas('frownLines.text1')}</P>

          <H3>{tTreatmentAreas('frownLines.treatment.heading')}</H3>
          <P>{tTreatmentAreas('frownLines.treatment.text1')}</P>

          <H3>{tTreatmentAreas('frownLines.effect.heading')}</H3>
          <P>{tTreatmentAreas('frownLines.effect.text1')}</P>
        </>
      )
    },
    {
      id: 'forehead',
      title: tTreatmentAreas('forehead.heading'),
      content: (
        <>
          <P>{tTreatmentAreas('forehead.text1')}</P>

          <H3>{tTreatmentAreas('forehead.treatment.heading')}</H3>
          <P>{tTreatmentAreas('forehead.treatment.text1')}</P>

          <H3>{tTreatmentAreas('forehead.effect.heading')}</H3>
          <P>{tTreatmentAreas('forehead.effect.text1')}</P>
        </>
      )
    },
    {
      id: 'crowFeet',
      title: tTreatmentAreas('crowFeet.heading'),
      content: (
        <>
          <P>{tTreatmentAreas('crowFeet.text1')}</P>

          <H3>{tTreatmentAreas('crowFeet.treatment.heading')}</H3>
          <P>{tTreatmentAreas('crowFeet.treatment.text1')}</P>

          <H3>{tTreatmentAreas('crowFeet.effect.heading')}</H3>
          <P>{tTreatmentAreas('crowFeet.effect.text1')}</P>
        </>
      )
    }
  ]

  const otherAreasItems = [
    {
      id: 'eyeBrow',
      title: tOtherAreas('eyeBrow.heading'),
      content: <P>{tOtherAreas('eyeBrow.text1')}</P>
    },
    {
      id: 'mouthCorner',
      title: tOtherAreas('mouthCorner.heading'),
      content: <P>{tOtherAreas('mouthCorner.text1')}</P>
    },
    {
      id: 'nose',
      title: tOtherAreas('nose.heading'),
      content: <P>{tOtherAreas('nose.text1')}</P>
    },
    {
      id: 'lipFlip',
      title: tOtherAreas('lipFlip.heading'),
      content: <P>{tOtherAreas('lipFlip.text1')}</P>
    },
    {
      id: 'gummySmile',
      title: tOtherAreas('gummySmile.heading'),
      content: <P>{tOtherAreas('gummySmile.text1')}</P>
    },
    {
      id: 'chin',
      title: tOtherAreas('chin.heading'),
      content: <P>{tOtherAreas('chin.text1')}</P>
    },
    {
      id: 'neck',
      title: tOtherAreas('neck.heading'),
      content: <P>{tOtherAreas('neck.text1')}</P>
    },
    {
      id: 'bruxism',
      title: tOtherAreas('bruxism.heading'),
      content: <P>{tOtherAreas('bruxism.text1')}</P>
    },
    {
      id: 'headache',
      title: tOtherAreas('headache.heading'),
      content: <P>{tOtherAreas('headache.text1')}</P>
    },
    {
      id: 'sweating',
      title: tOtherAreas('sweating.heading'),
      content: <P>{tOtherAreas('sweating.text1')}</P>
    }
  ]

  return [treatmentAreasItems, otherAreasItems]
}
