import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostforminskning = () => {
  const t = useTranslations()
  return (
    <SpaceContainer spaceVertically>
      <H1>{t('brostforminskning.title')}</H1>
      <P>{t('brostforminskning.text')}</P>
    </SpaceContainer>
  )
}

export default Brostforminskning
