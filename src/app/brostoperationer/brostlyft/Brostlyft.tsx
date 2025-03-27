import { useTranslations } from 'next-intl'

import { Pillar } from '@/app/components/layout/Pillar'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { A } from '@/app/components/typography/A'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'

const Brostlyft = () => {
  const t = useTranslations('brostlyft')
  return (
    <>
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
          </Pillar>
        }
        />
        <SpaceContainer spaceVertically noPadding>
          <SimpleCard
            bgColor={BgColors.Green}
            bgPosition="right"
            content={
              <>
                <H2 upperCase white className="text-center">
                  {useTranslations()('common.freeConsultation')}
                </H2>
                <div className="m-auto flex max-w-xs justify-center">
                  <A href="/boka" className="uppercase" buttonStyle>
                    {useTranslations()('common.bookNow')}
                  </A>
                </div>
              </>
            }
          />
        </SpaceContainer>
        <SpaceContainer noPadding spaceTop>
          <Pillar>
            <H2>{t('techniques.heading1')}</H2>
            <P>{t('techniques.text1')}</P>
            <P>{t('techniques.text2')}</P>
            <P>{t('techniques.text3')}</P>
            <P>{t('techniques.text4')}</P>
            <P>{t('techniques.text5')}</P>
            <P>{t('techniques.text6')}</P>
          </Pillar>              
        </SpaceContainer>
        <SpaceContainer spaceVertically noPadding>
          <SimpleCard
            bgColor={BgColors.Green}
            bgPosition="right"
            content={
              <>
                <H2 upperCase white className="text-center">
                  {useTranslations()('common.freeConsultation')}
                </H2>
                <div className="m-auto flex max-w-xs justify-center">
                  <A href="/boka" className="uppercase" buttonStyle>
                    {useTranslations()('common.bookNow')}
                  </A>
                </div>
              </>
            }
          />
        </SpaceContainer>
    </>
  )
}

export default Brostlyft
