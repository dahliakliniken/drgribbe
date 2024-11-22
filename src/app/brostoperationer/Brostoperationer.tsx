import { useTranslations } from 'next-intl'
import { P } from '../components/typography/P'
import { H1 } from '../components/typography/H1'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import Link from 'next/link'
import { Accordion } from '../components/surfaces/Accordion'
import { H2 } from '../components/typography/H2'

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

  const accordionItems = [
    'fasting',
    'descutan',
    'lotion',
    'smoking',
    'alcohol',
    'cleaning',
    'food',
    'clothes',
    'supportStockings',
    'toiletBag',
    'dog'
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
        <H2>{'Förberedelser inför din operation'}</H2>
        <P>{'Det är en rad saker du ska tänka på inför din operation.'}</P>
        {accordionItems.map((item, index) => (
          <Accordion
            key={index}
            id={`panel-${index}`}
            title={t(`accordion.${item}.title`)}
          >
            <P small>{t(`accordion.${item}.text1`)}</P>
            {t.has(`accordion.${item}.text2`) && (
              <P small>{t(`accordion.${item}.text2`)}</P>
            )}
            {t.has(`accordion.${item}.text3`) && (
              <P small>{t(`accordion.${item}.text3`)}</P>
            )}
          </Accordion>
        ))}
      </SpaceContainer>
    </main>
  )
}

export default Brostoperationer
