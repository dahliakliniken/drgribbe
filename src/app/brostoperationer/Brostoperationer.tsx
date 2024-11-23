import { useMessages, useTranslations } from 'next-intl'
import { P } from '../components/typography/P'
import { H1 } from '../components/typography/H1'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import Link from 'next/link'
import { Accordion } from '../components/surfaces/Accordion'
import { H2 } from '../components/typography/H2'

const Brostoperationer = () => {
  const t = useTranslations()
  const messages = useMessages()
  const beforeOperationKeys = Object.keys(messages.beforeOperation)
  const afterOperationKeys = Object.keys(messages.afterOperation)

  const links = [
    {
      text: t('implantaten.title'),
      href: '/brostoperationer/implantaten',
      id: crypto.randomUUID()
    },
    {
      text: t('brostlyft.title'),
      href: '/brostoperationer/brostlyft',
      id: crypto.randomUUID()
    },
    {
      text: t('brostforstoring.title'),
      href: '/brostoperationer/brostforstoring',
      id: crypto.randomUUID()
    },
    {
      text: t('brostforminskning.title'),
      href: '/brostoperationer/brostforminskning',
      id: crypto.randomUUID()
    }
  ]

  const beforeOperationItems = beforeOperationKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3'] // Predefined keys for texts
    const content = contentKeys
      .filter((textKey) => t.has(`beforeOperation.${key}.${textKey}`)) // Filter out texts that don't exist
      .map((textKey) => t(`beforeOperation.${key}.${textKey}`))

    return {
      id: key,
      title: t(`beforeOperation.${key}.title`),
      content
    }
  })

  const afterOperationItems = afterOperationKeys.map((key) => {
    const contentKeys = ['text1', 'text2', 'text3'] // Predefined keys for texts
    const content = contentKeys
      .filter((textKey) => t.has(`afterOperation.${key}.${textKey}`)) // Filter out texts that don't exist
      .map((textKey) => t(`afterOperation.${key}.${textKey}`))

    return {
      id: key,
      title: t(`afterOperation.${key}.title`),
      content
    }
  })

  return (
    <main className="mb-56 flex flex-col">
      <SpaceContainer spaceVertically>
        <H1>{t('brostoperationer.title')}</H1>
        <P>{t('brostoperationer.text')}</P>

        <ul>
          {links.map(({ text, href, id }) => (
            <li key={id}>
              <Link href={href} className="hover:underline">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </SpaceContainer>
      <SpaceContainer spaceVertically>
        <H2>{'Förberedelser inför din operation'}</H2>
        <P>{'Det är en rad saker du ska tänka på inför din operation.'}</P>
        <div className="max-w-3xl">
          <Accordion items={beforeOperationItems} />
        </div>
      </SpaceContainer>
      <SpaceContainer spaceVertically>
        <H2>{'Efter din operation'}</H2>
        <div className="max-w-3xl">
          <Accordion items={afterOperationItems} />
        </div>
      </SpaceContainer>
    </main>
  )
}

export default Brostoperationer
