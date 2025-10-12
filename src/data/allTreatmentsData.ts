import { BgColors } from '@/app/types'
import { BgPositions } from '@/app/types'
import Enlargement from '@/public/images/breastEnlargement.svg'
import Lift from '@/public/images/breastLift.svg'
import Reduction from '@/public/images/breastReduction.svg'
import MuscleRelaxation from '@/public/images/muscleRelaxation.svg'

export const allTreatmentsData = [
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastEnlargement.title',
    image: Enlargement,
    altText: 'treatmentBox.treatments.breastEnlargement.altText',
    paragraphs: [
      'treatmentBox.treatments.breastEnlargement.paragraph1',
      'treatmentBox.treatments.breastEnlargement.paragraph2'
    ],
    linkText: 'treatmentBox.treatments.breastEnlargement.linkText',
    linkHref: '/brostoperationer/brostforstoring',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastReduction.title',
    image: Reduction,
    altText: 'treatmentBox.treatments.breastReduction.altText',
    paragraphs: [
      'treatmentBox.treatments.breastReduction.paragraph1',
      'treatmentBox.treatments.breastReduction.paragraph2'
    ],
    linkText: 'treatmentBox.treatments.breastReduction.linkText',
    linkHref: '/brostoperationer/brostforminskning',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastLift.title',
    image: Lift,
    altText: 'treatmentBox.treatments.breastLift.altText',
    paragraphs: [
      'treatmentBox.treatments.breastLift.paragraph1',
      'treatmentBox.treatments.breastLift.paragraph2'
    ],
    linkText: 'treatmentBox.treatments.breastLift.linkText',
    linkHref: '/brostoperationer/brostlyft',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.muscleRelaxation.title',
    image: MuscleRelaxation,
    altText: 'treatmentBox.treatments.muscleRelaxation.altText',
    paragraphs: [
      'treatmentBox.treatments.muscleRelaxation.paragraph1',
      'treatmentBox.treatments.muscleRelaxation.paragraph2'
    ],
    linkText: 'treatmentBox.treatments.muscleRelaxation.linkText',
    linkHref: '/hud-och-injektioner',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  }
]
