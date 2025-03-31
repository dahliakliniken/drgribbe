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
    image: Enlargement,
    paragraphs: [
      'treatmentBox.treatments.breastEnlargement.paragraph1',
      // 'treatmentBox.treatments.breastEnlargement.paragraph2',
      'treatmentBox.treatments.breastEnlargement.paragraph3'
    ],
    linkHref: '/brostoperationer/brostforstoring',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastReduction.title',
    image: Reduction,
    paragraphs: [
      'treatmentBox.treatments.breastReduction.paragraph1',
      // 'treatmentBox.treatments.breastReduction.paragraph2',
      'treatmentBox.treatments.breastReduction.paragraph3'
    ],
    linkHref: '/brostoperationer/brostforminskning',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastLift.title',
    image: Lift,
    paragraphs: [
      'treatmentBox.treatments.breastLift.paragraph1',
      // 'treatmentBox.treatments.breastLift.paragraph2',
      'treatmentBox.treatments.breastLift.paragraph3'
    ],
    linkHref: '/brostoperationer/brostlyft',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.beforeAndAfter.title',
    image: MuscleRelaxation,
    paragraphs: [
      'treatmentBox.treatments.beforeAndAfter.paragraph1'
      // 'treatmentBox.treatments.beforeAndAfter.paragraph2'
    ],
    linkHref: '/brostoperationer/fore-och-efter',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  }
]
