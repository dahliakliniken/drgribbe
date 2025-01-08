import { Pillar } from '@/app/components/layout/Pillar'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
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
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('background.text1')}</P>              
          </Pillar>
        }
      />
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <P>{t('background.text2')}</P>
            <P>{t('background.text3')}</P>
            <SpaceContainer noPadding spaceTop>
              <H2>{t('techniques.heading1')}</H2>
              <P>{t('techniques.text1')}</P>
              <P >{t('techniques.text2')}</P>
              <P >{t('techniques.text3')}</P>
              <P >{t('techniques.text4')}</P>
              <P >{t('techniques.text5')}</P>
              <P >{t('techniques.text6')}</P>
            </SpaceContainer>            
          </Pillar>
        }
      />
    </main>
  )
}

export default Brostlyft
