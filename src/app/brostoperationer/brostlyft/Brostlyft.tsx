import { Pillar } from '@/app/components/layout/Pillar'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'
import { useTranslations } from 'next-intl'

const Brostlyft = () => {
  const t = useTranslations('brostlyft')
  return (
    <main className="mb-36 flex flex-col">
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <H1>{t('title')}</H1>
            <H2>{t('background.heading1')}</H2>
            <div className="lg:columns-2">
              <P>{t('background.text1')}</P>
              <P>{t('background.text2')}</P>
              <P>{t('background.text3')}</P>
            </div>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{t('techniques.heading1')}</H2>

            <P white>{t('techniques.text1')}</P>
            <P white>{t('techniques.text2')}</P>
            <P white>{t('techniques.text3')}</P>
            <P white>{t('techniques.text4')}</P>
            <P white>{t('techniques.text5')}</P>
            <P white>{t('techniques.text6')}</P>
          </Pillar>
        }
      />
    </main>
  )
}

export default Brostlyft
