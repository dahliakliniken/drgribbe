import { useTranslations } from 'next-intl'
import { H1 } from '../components/typography/H1'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'

const Priser = () => {
  const t = useTranslations()
  return (
    <SpaceContainer spaceVertically>
      <H1>{t('priser.title')}</H1>
      <P>{t('priser.text')}</P>
    </SpaceContainer>
  )
}

export default Priser
