import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Card } from '../surfaces/Card'
import { H2 } from '../typography/H2'
import Enlargement from '../../../../public/images/breastEnlargement.svg'
import Reduction from '../../../../public/images/breastReduction.svg'
import Lift from '../../../../public/images/breastLift.svg'
import MuscleRelaxation from '../../../../public/images/muscleRelaxation.svg'
import { CardRow } from '../surfaces/CardRow'
import { H3 } from '../typography/H3'
import { SpaceContainer } from './SpaceContainer'
import { BgColors, BgPositions } from '@/app/types'

export const TreatmentBox: React.FC = () => {
  const t = useTranslations()

  const treatments = [
    {
      title: t('treatmentBox.treatments.breastEnlargement.title'),
      image: Enlargement,
      paragraphs: [
        t('treatmentBox.treatments.breastEnlargement.paragraph1'),
        t('treatmentBox.treatments.breastEnlargement.paragraph2'),
        t('treatmentBox.treatments.breastEnlargement.paragraph3')
      ],
      linkText: t('treatmentBox.treatments.breastEnlargement.linkText'),
      linkHref: '/brostoperationer/brostforstoring',
      bgPosition: BgPositions['bottom-right']
    },
    {
      title: t('treatmentBox.treatments.breastReduction.title'),
      image: Reduction,
      paragraphs: [
        t('treatmentBox.treatments.breastReduction.paragraph1'),
        t('treatmentBox.treatments.breastReduction.paragraph2'),
        t('treatmentBox.treatments.breastReduction.paragraph3')
      ],
      linkText: t('treatmentBox.treatments.breastReduction.linkText'),
      linkHref: '/brostoperationer/brostforminskning',
      bgPosition: BgPositions['bottom-left']
    },
    {
      title: t('treatmentBox.treatments.breastLift.title'),
      image: Lift,
      paragraphs: [
        t('treatmentBox.treatments.breastLift.paragraph1'),
        t('treatmentBox.treatments.breastLift.paragraph2'),
        t('treatmentBox.treatments.breastLift.paragraph3')
      ],
      linkText: t('treatmentBox.treatments.breastLift.linkText'),
      linkHref: '/brostoperationer/brostlyft',
      bgPosition: BgPositions['bottom-left']
    },
    {
      title: t('treatmentBox.treatments.muscleRelaxation.title'),
      image: MuscleRelaxation,
      paragraphs: [
        t('treatmentBox.treatments.muscleRelaxation.paragraph1'),
        t('treatmentBox.treatments.muscleRelaxation.paragraph2'),
        t('treatmentBox.treatments.muscleRelaxation.paragraph3')
      ],
      linkText: t('treatmentBox.treatments.muscleRelaxation.linkText'),
      linkHref: '/hud-och-injektioner',
      bgPosition: BgPositions['bottom-right']
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
            key={index} // TODO: Use a more unique key
            title={<H3 white>{treatment.title}</H3>}
            paragraphs={treatment.paragraphs}
            bgColor={BgColors.Green}
            smallText
            image={
              <Image
                className="m-auto my-6"
                src={treatment.image}
                alt={''}
                height={125}
              />
            }
            oneColumn
            rounded
            linkHref={treatment.linkHref}
            linkText={treatment.linkText}
            clickable
            cardList
            bgPosition={treatment.bgPosition}
          />
        ))}
      </CardRow>
    </>
  )
}
