import { useMessages, useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { FlippableCard } from '@/components/surfaces/FlippableCard'
import { H1 } from '@/components/typography/H1'
import anna from '@/public/images/Anna.png'
import johanna from '@/public/images/Johanna.png'
import kristina from '@/public/images/kristina.jpg'
// import malin from '@/public/images/Malin.png'
import najwa from '@/public/images/Najwa.png'
import orjan from '@/public/images/orjan.png'
import selda from '@/public/images/selda.png'

const VarPersonal = () => {
  const t = useTranslations('var-personal.page')
  const messages = useMessages() as {
    'var-personal'?: {
      page?: {
        staff?: Record<
          string,
          { name: string; titles: string[]; description?: string }
        >
      }
    }
  }

  const staffContent = messages['var-personal']?.page?.staff ?? {}
  const staffOrder = [
    'orjanGribbe',
    'kristina',
    'najwaAlIbrahim',
    'annaBerggren',
    'johannaBerg',
    'seldaDemirkiran'
  ] as const
  const staffImages = {
    orjanGribbe: orjan,
    kristina,
    najwaAlIbrahim: najwa,
    annaBerggren: anna,
    johannaBerg: johanna,
    seldaDemirkiran: selda
  }

  const staff = staffOrder
    .map((key) => {
      const member = staffContent[key]
      if (!member) return null

      return {
        id: key,
        name: member.name,
        titles: member.titles,
        image: staffImages[key],
        description: member.description
      }
    })
    .filter((member): member is NonNullable<typeof member> => Boolean(member))

  return (
    <Pillar>
      <SpaceContainer>
        <H1>{t('hero.title')}</H1>
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
