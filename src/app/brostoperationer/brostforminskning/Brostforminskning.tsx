import { Pillar } from '@/app/components/layout/Pillar'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'
import { useTranslations } from 'next-intl'

const Brostforminskning = () => {
  const t = useTranslations('brostforminskning')
  return (
    <main className="mb-36 flex flex-col">
      <SimpleCard
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <H2 white>{t('background.heading1')}</H2>
            <div className="lg:columns-2">
              <P white>{t('background.text1')}</P>
              <P white>{t('background.text1')}</P>
              <P white>{t('background.text1')}</P>
            </div>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.Grey}
        bgPosition="left"
        content={
          <Pillar>
            <H2>{t('consultation.heading1')}</H2>
            <div className="lg:columns-2">
              <P>{t('consultation.text1')}</P>
            </div>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <H2>{t('technique.heading1')}</H2>
            <H3>{t('technique.preSurgery.heading1')}</H3>
            <P>{t('technique.preSurgery.text1')}</P>

            <H3>{t('technique.surgery.heading1')}</H3>
            <P>{t('technique.surgery.text1')}</P>
          </Pillar>
        }
      />
    </main>
  )
}

export default Brostforminskning
