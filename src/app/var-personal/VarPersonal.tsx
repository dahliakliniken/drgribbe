import { useTranslations } from 'next-intl'

import anna from '../../../public/images/Anna.png'
import johanna from '../../../public/images/Johanna.png'
import malin from '../../../public/images/Malin.png'
import najwa from '../../../public/images/Najwa.png'
import orjan from '../../../public/images/orjan.png'
import selda from '../../../public/images/selda.png'
import { Pillar } from '../components/layout/Pillar'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { FlippableCard } from '../components/surfaces/FlippableCard'
import { H1 } from '../components/typography/H1'

const VarPersonal = () => {
  const t = useTranslations()
  const staff = [
    {
      id: crypto.randomUUID(),
      name: 'Örjan Gribbe',
      titles: ['Leg läkare', 'Medicine doktor', 'Specialist i plastikkirurgi'],
      image: orjan,
      description:
        'Dr. Gribbe has over 20 years of experience in plastic surgery and is specialized in breast reconstruction. He completed his medical degree at Karolinska Institute and has since dedicated his career to helping patients achieve their desired results with a focus on natural-looking outcomes.'
    },
    {
      id: crypto.randomUUID(),
      name: 'Kristina',
      titles: ['Reception och övrig administration']
    },
    {
      id: crypto.randomUUID(),
      name: 'Najwa Al-Ibrahim',
      titles: ['Narkosläkare'],
      image: najwa
    },
    {
      id: crypto.randomUUID(),
      name: 'Karin Björkman',
      titles: ['Narkosläkare']
    },
    {
      id: crypto.randomUUID(),
      name: 'Johanna Berg',
      titles: ['Operationssjuksköterska'],
      image: johanna
    },
    {
      id: crypto.randomUUID(),
      name: 'Malin Bosson',
      titles: ['Operationssjuksköterska'],
      image: malin
    },
    {
      id: crypto.randomUUID(),
      name: 'Anna Berggren',
      titles: ['Narkossjuksköterska'],
      image: anna
    },
    {
      id: crypto.randomUUID(),
      name: 'Selda',
      titles: ['Undersköterska'],
      image: selda
    }
  ]

  return (
    <Pillar>
      <SpaceContainer>
        <H1>{t('varPersonal.title')}</H1>
        <ul className="grid gap-6 md:grid-cols-2">
          {staff.map((member) => (
            <li key={member.id} className="relative">
              <FlippableCard member={member} />
            </li>
          ))}
        </ul>
      </SpaceContainer>
    </Pillar>
  )
}

export default VarPersonal
