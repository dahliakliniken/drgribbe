import { useTranslations } from 'next-intl'
import { Pillar } from '../../components/layout/Pillar'
import { H1 } from '../../components/typography/H1'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'

const ForeOchEfter = () => {
  const t = useTranslations('foreOchEfter')

  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <SpaceContainer>
          <H1>{t('title')}</H1>
        </SpaceContainer>
      </Pillar>
    </main>
  )
}

export default ForeOchEfter
