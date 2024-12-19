import { useTranslations } from 'next-intl'
import { Pillar } from '../../components/layout/Pillar'
import { H1 } from '../../components/typography/H1'

const ForeOchEfter = () => {
  const t = useTranslations('foreOchEfter')

  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <H1>{t('title')}</H1>
      </Pillar>
    </main>
  )
}

export default ForeOchEfter
