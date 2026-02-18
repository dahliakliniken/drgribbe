import { BgPositions } from '@/app/types'
import { BgColors } from '@/app/types'
import Enlargement from '@/public/images/breastEnlargement.svg'
import Lift from '@/public/images/breastLift.svg'
import Reduction from '@/public/images/breastReduction.svg'
import MuscleRelaxation from '@/public/images/muscleRelaxation.svg'

export const breastOperationsTreatmentsData = [
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastEnlargement.title',
    altText: 'treatments.breastEnlargement.altText',
    image: Enlargement,
    paragraphs: [
      'treatments.breastEnlargement.paragraph1',
      'treatments.breastEnlargement.paragraph2'
    ],
    linkHref: '/brostoperationer/brostforstoring',
    linkText: 'treatments.breastEnlargement.linkText',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastReduction.title',
    altText: 'treatments.breastReduction.altText',
    image: Reduction,
    paragraphs: [
      'treatments.breastReduction.paragraph1',
      'treatments.breastReduction.paragraph2'
    ],
    linkHref: '/brostoperationer/brostforminskning',
    linkText: 'treatments.breastReduction.linkText',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.breastLift.title',
    altText: 'treatments.breastLift.altText',
    image: Lift,
    paragraphs: [
      'treatments.breastLift.paragraph1',
      'treatments.breastLift.paragraph2'
    ],
    linkHref: '/brostoperationer/brostlyft',
    linkText: 'treatments.breastLift.linkText',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatments.beforeAndAfter.title',
    altText: 'treatments.beforeAndAfter.altText',
    image: MuscleRelaxation,
    paragraphs: ['treatments.beforeAndAfter.paragraph1'],
    linkHref: '/brostoperationer/fore-och-efter',
    linkText: 'treatments.beforeAndAfter.linkText',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  }
]
