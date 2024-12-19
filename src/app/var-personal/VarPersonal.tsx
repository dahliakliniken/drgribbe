import { H1 } from '../components/typography/H1'
import { useTranslations } from 'next-intl'
import { H2 } from '../components/typography/H2'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { BgColors } from '../types'
import { Pillar } from '../components/layout/Pillar'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'

const VarPersonal = () => {
  const t = useTranslations('varPersonal')
  const staff = [
    {
      id: crypto.randomUUID(),
      name: 'Örjan Gribbe',
      titles: ['Leg läkare', 'Medicine doktor', 'Specialist i plastikkirurgi']
    },
    {
      id: crypto.randomUUID(),
      name: 'Kristina',
      titles: ['Deltid i reception och omvårdnad på operation']
    },
    {
      id: crypto.randomUUID(),
      name: 'Najwa Al-Ibrahim',
      titles: ['Narkosläkare']
    },
    {
      id: crypto.randomUUID(),
      name: 'Karin Björkman',
      titles: ['Narkosläkare']
    },
    {
      id: crypto.randomUUID(),
      name: 'Johanna Berg',
      titles: ['Operationssjuksköterska']
    },
    {
      id: crypto.randomUUID(),
      name: 'Malin Bosson',
      titles: ['Operationssjuksköterska']
    },
    {
      id: crypto.randomUUID(),
      name: 'Anna Berggren',
      titles: ['Narkossjuksköterska']
    },
    {
      id: crypto.randomUUID(),
      name: 'Selda',
      titles: ['Undersköterska']
    }
  ]

  return (
    <main className="mb-36">
      <Pillar>
        <SpaceContainer>
          <H1>{t('title')}</H1>
          <ul className="grid gap-6 md:grid-cols-2">
            {staff.map((member) => (
              <li key={member.id}>
                <SimpleCard
                  bgColor={BgColors.Coral}
                  bgPosition="right"
                  content={
                    <Pillar>
                      <H2 white>{member.name}</H2>
                      <ul>
                        {member.titles.map((title, index) => (
                          <li key={`${member.id}-${index}`}>
                            <P small white>
                              {title}
                            </P>
                          </li>
                        ))}
                      </ul>
                    </Pillar>
                  }
                />
              </li>
            ))}
          </ul>
        </SpaceContainer>
      </Pillar>
    </main>
  )
}

export default VarPersonal
