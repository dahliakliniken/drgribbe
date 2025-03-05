import { useTranslations } from 'next-intl'

import { Pillar } from '@/app/components/layout/Pillar'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'

const Brostforminskning = () => {
  const t = useTranslations('brostforminskning')
  return (
    <>
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
            <P>{t('consultation.text2')}</P>
            <P>{t('consultation.text3')}</P>
            <P>{t('consultation.text4')}</P>
            <P>{t('consultation.text5')}</P>
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
            <P white>{t('technique.surgery.text2')}</P>
            <P white>{t('technique.surgery.text3')}</P>
            <P white>{t('technique.surgery.text4')}</P>
            <P white>{t('technique.surgery.text5')}</P>
            <P white>{t('technique.surgery.text6')}</P>
            <P white>{t('technique.surgery.text7')}</P>
            <P white>{t('technique.surgery.text8')}</P>
            <P white>{t('technique.surgery.text9')}</P>
          </Pillar>
        }
      />
    </>
  )
}

export default Brostforminskning
