import Enlargement from '../../public/images/breastEnlargement.svg'
import Reduction from '../../public/images/breastReduction.svg'
import Lift from '../../public/images/breastLift.svg'
import MuscleRelaxation from '../../public/images/muscleRelaxation.svg'
import { BgPositions } from '@/app/types'
import { BgColors } from '@/app/types'

export const breastOperationsTreatmentsData = [
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.breastEnlargement.title',
    image: Enlargement,
    paragraphs: [
      'treatmentBox.treatments.breastEnlargement.paragraph1',
      'treatmentBox.treatments.breastEnlargement.paragraph2',
      'treatmentBox.treatments.breastEnlargement.paragraph3'
    ],
    ariaLabel: 'treatmentBox.treatments.breastEnlargement.ariaLabel',
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
      'treatmentBox.treatments.breastReduction.paragraph2',
      'treatmentBox.treatments.breastReduction.paragraph3'
    ],
    ariaLabel: 'treatmentBox.treatments.breastReduction.ariaLabel',
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
      'treatmentBox.treatments.breastLift.paragraph2',
      'treatmentBox.treatments.breastLift.paragraph3'
    ],
    ariaLabel: 'treatmentBox.treatments.breastLift.ariaLabel',
    linkHref: '/brostoperationer/brostlyft',
    bgPosition: BgPositions['bottom-left'],
    bgColor: BgColors.Green
  },
  {
    id: crypto.randomUUID(),
    title: 'treatmentBox.treatments.beforeAndAfter.title',
    image: MuscleRelaxation,
    paragraphs: [
      'treatmentBox.treatments.beforeAndAfter.paragraph1',
      'treatmentBox.treatments.beforeAndAfter.paragraph2'
    ],
    ariaLabel: 'treatmentBox.treatments.beforeAndAfter.ariaLabel',
    linkHref: '/brostoperationer/fore-och-efter',
    bgPosition: BgPositions['bottom-right'],
    bgColor: BgColors.Green
  }
]
