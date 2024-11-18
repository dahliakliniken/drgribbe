import { useTranslations } from 'next-intl'
import { P } from '../components/typography/P'
import { H1 } from '../components/typography/H1'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import Link from 'next/link'

const Brostoperationer = () => {
  const t = useTranslations()

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

  return (
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
  )
}

export default Brostoperationer
