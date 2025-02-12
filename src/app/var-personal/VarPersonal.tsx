import { H1 } from '../components/typography/H1'
import { useTranslations } from 'next-intl'
import { H2 } from '../components/typography/H2'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { BgColors } from '../types'
import { Pillar } from '../components/layout/Pillar'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import selda from '../../../public/images/selda.png'
import najwa from '../../../public/images/Najwa.png'
import anna from '../../../public/images/Anna.png'
import orjan from '../../../public/images/orjan.png'
import johanna from '../../../public/images/Johanna.png'
import malin from '../../../public/images/Malin.png'
import Image from 'next/image'

const VarPersonal = () => {
  const t = useTranslations()
  const staff = [
    {
      id: crypto.randomUUID(),
      name: 'Örjan Gribbe',
      titles: ['Leg läkare', 'Medicine doktor', 'Specialist i plastikkirurgi'],
      image: orjan
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
            <li key={member.id} className="overflow-hidden">
              <SimpleCard
                bgColor={BgColors.Coral}
                bgPosition="right"
                content={
                  <Pillar>
                    <H2 white className="staffh2">
                      {member.name}
                    </H2>
                    {member.image && (
                      <Image
                        src={member.image}
                        alt={t('altText.patientRoom')}
                        className="staffportrait w-1/2 rounded-full"
                      />
                    )}
                    <ul className="staffh2">
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
  )
}

export default VarPersonal
