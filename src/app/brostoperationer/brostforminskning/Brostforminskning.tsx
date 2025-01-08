import { Pillar } from '@/app/components/layout/Pillar'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
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
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('background.text1')}</P>            
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <SpaceContainer noPadding spaceVertically>
              <P>{t('background.text2')}</P>
              <P>{t('background.text3')}</P>
            </SpaceContainer>
              
            <H2>{t('consultation.heading1')}</H2>
            <P>{t('consultation.text1')}</P>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H2 white>{t('technique.heading1')}</H2>
            <H3 white>{t('technique.preSurgery.heading1')}</H3>
            <P white>{t('technique.preSurgery.text1')}</P>

            <H3 white>{t('technique.surgery.heading1')}</H3>
            <P white>{t('technique.surgery.text1')}</P>
          </Pillar>
        }
      />
    </main>
  )
}

export default Brostforminskning
