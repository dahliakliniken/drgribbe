import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostlyft = () => {
  const t = useTranslations()
  return (
    <SpaceContainer spaceVertically>
      <H1>{t('brostlyft.title')}</H1>
      <P>{t('brostlyft.text')}</P>
    </SpaceContainer>
  )
}

export default Brostlyft
