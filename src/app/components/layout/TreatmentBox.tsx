import React from 'react'
import { useTranslations } from 'next-intl'
import Card from '../surfaces/Card'
import H2 from '../typography/H2'
import Enlargement from '../../../../public/images/breastEnlargement.svg'
import Reduction from '../../../../public/images/breastReduction.svg'
import Lift from '../../../../public/images/breastLift.svg'
import MuscleRelaxation from '../../../../public/images/muscleRelaxation.svg'
import CardRow from '../surfaces/CardRow'
import H3 from '../typography/H3'
import Image from 'next/image'
import SpaceContainer from './SpaceContainer'

const TreatmentBox: React.FC = () => {
  const t = useTranslations()

  const treatments = [
    {
      title: t('treatmentBox.treatments.breastEnlargement.title'),
      image: Enlargement,
      paragraphs: [
        t('treatmentBox.treatments.breastEnlargement.paragraph1'),
        t('treatmentBox.treatments.breastEnlargement.paragraph2'),
        t('treatmentBox.treatments.breastEnlargement.paragraph3')
      ]
    },
    {
      title: t('treatmentBox.treatments.breastReduction.title'),
      image: Reduction,
      paragraphs: [
        t('treatmentBox.treatments.breastReduction.paragraph1'),
        t('treatmentBox.treatments.breastReduction.paragraph2'),
        t('treatmentBox.treatments.breastReduction.paragraph3')
      ]
    },
    {
      title: t('treatmentBox.treatments.breastLift.title'),
      image: Lift,
      paragraphs: [
        t('treatmentBox.treatments.breastLift.paragraph1'),
        t('treatmentBox.treatments.breastLift.paragraph2'),
        t('treatmentBox.treatments.breastLift.paragraph3')
      ]
    },
    {
      title: t('treatmentBox.treatments.muscleRelaxation.title'),
      image: MuscleRelaxation,
      paragraphs: [
        t('treatmentBox.treatments.muscleRelaxation.paragraph1'),
        t('treatmentBox.treatments.muscleRelaxation.paragraph2'),
        t('treatmentBox.treatments.muscleRelaxation.paragraph3')
      ]
    }
  ]

  return (
    <>
      <SpaceContainer spaceVertically>
        <H2 upperCase>{t('treatmentBox.title')}</H2>
      </SpaceContainer>

      <CardRow>
        {treatments.map((treatment, index) => (
          <Card
            key={index}
            title={<H3 white>{treatment.title}</H3>}
            paragraphs={treatment.paragraphs}
            bgColor="bg-green"
            smallText
            image={
              <Image
                className="m-auto my-6"
                src={treatment.image}
                alt={''}
                height={152}
              />
            }
            oneColumn
            bgLeft
            imageHeight={152}
          />
        ))}
      </CardRow>
    </>
  )
}

export default TreatmentBox
