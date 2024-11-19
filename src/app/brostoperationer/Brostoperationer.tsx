import { useTranslations } from 'next-intl'
import { P } from '../components/typography/P'
import { H1 } from '../components/typography/H1'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import Link from 'next/link'
import { Accordion } from '../components/surfaces/Accordion'

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
        <Accordion id="panel1" title="Accordion 1">
          <P small>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          </P>
        </Accordion>
        <Accordion id="panel2" title="Accordion 2">
          <P small>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          </P>
        </Accordion>
        <Accordion id="panel3" title="Accordion 3">
          <P small>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          </P>
        </Accordion>
      </SpaceContainer>
    </main>
  )
}

export default Brostoperationer
