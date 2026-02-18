import { BgColors } from '@/app/types'
import { BgPositions } from '@/app/types'
import Enlargement from '@/public/images/breastEnlargement.svg'
import Lift from '@/public/images/breastLift.svg'
import Reduction from '@/public/images/breastReduction.svg'
import MuscleRelaxation from '@/public/images/muscleRelaxation.svg'

export const allTreatmentsData = [
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastEnlargement.title',
    image: Enlargement,
    altText: 'treatments.breastEnlargement.altText',
    paragraphs: [
      'treatments.breastEnlargement.paragraph1',
      'treatments.breastEnlargement.paragraph2'
    ],
    linkText: 'treatments.breastEnlargement.linkText',
    linkHref: '/brostoperationer/brostforstoring',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastReduction.title',
    image: Reduction,
    altText: 'treatments.breastReduction.altText',
    paragraphs: [
      'treatments.breastReduction.paragraph1',
      'treatments.breastReduction.paragraph2'
    ],
    linkText: 'treatments.breastReduction.linkText',
    linkHref: '/brostoperationer/brostforminskning',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastLift.title',
    image: Lift,
    altText: 'treatments.breastLift.altText',
    paragraphs: [
      'treatments.breastLift.paragraph1',
      'treatments.breastLift.paragraph2'
    ],
    linkText: 'treatments.breastLift.linkText',
    linkHref: '/brostoperationer/brostlyft',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.muscleRelaxation.title',
    image: MuscleRelaxation,
    altText: 'treatments.muscleRelaxation.altText',
    paragraphs: [
      'treatments.muscleRelaxation.paragraph1',
      'treatments.muscleRelaxation.paragraph2'
    ],
    linkText: 'treatments.muscleRelaxation.linkText',
    linkHref: '/hud-och-injektioner',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  }
]
