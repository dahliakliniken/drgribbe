import { BgPositions } from '@/app/types'
import { BgColors } from '@/app/types'

import Enlargement from '../../public/images/breastEnlargement.svg'
import Lift from '../../public/images/breastLift.svg'
import Reduction from '../../public/images/breastReduction.svg'
import MuscleRelaxation from '../../public/images/muscleRelaxation.svg'

export const breastOperationsTreatmentsData = [
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastEnlargement.title',
    altText: 'treatmentBox.treatments.breastEnlargement.altText',
    image: Enlargement,
    paragraphs: [
      'treatmentBox.treatments.breastEnlargement.paragraph1',
      'treatmentBox.treatments.breastEnlargement.paragraph2'
    ],
    linkHref: '/brostoperationer/brostforstoring',
    linkText: 'treatmentBox.treatments.breastEnlargement.linkText',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastReduction.title',
    altText: 'treatmentBox.treatments.breastReduction.altText',
    image: Reduction,
    paragraphs: [
      'treatmentBox.treatments.breastReduction.paragraph1',
      'treatmentBox.treatments.breastReduction.paragraph2'
    ],
    linkHref: '/brostoperationer/brostforminskning',
    linkText: 'treatmentBox.treatments.breastReduction.linkText',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastLift.title',
    altText: 'treatmentBox.treatments.breastLift.altText',
    image: Lift,
    paragraphs: [
      'treatmentBox.treatments.breastLift.paragraph1',
      'treatmentBox.treatments.breastLift.paragraph2'
    ],
    linkHref: '/brostoperationer/brostlyft',
    linkText: 'treatmentBox.treatments.breastLift.linkText',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.beforeAndAfter.title',
    altText: 'treatmentBox.treatments.beforeAndAfter.altText',
    image: MuscleRelaxation,
    paragraphs: ['treatmentBox.treatments.beforeAndAfter.paragraph1'],
    linkHref: '/brostoperationer/fore-och-efter',
    linkText: 'treatmentBox.treatments.beforeAndAfter.linkText',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  }
]
