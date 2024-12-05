import Enlargement from '../../public/images/breastEnlargement.svg'
import Reduction from '../../public/images/breastReduction.svg'
import Lift from '../../public/images/breastLift.svg'
import { BgPositions } from '@/app/types'

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
    linkText: 'treatmentBox.treatments.breastEnlargement.linkText',
    linkHref: '/brostoperationer/brostforstoring',
    bgPosition: BgPositions['bottom-right']
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
    linkText: 'treatmentBox.treatments.breastReduction.linkText',
    linkHref: '/brostoperationer/brostforminskning',
    bgPosition: BgPositions['bottom-left']
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
    linkText: 'treatmentBox.treatments.breastLift.linkText',
    linkHref: '/brostoperationer/brostlyft',
    bgPosition: BgPositions['bottom-left']
  }
]
