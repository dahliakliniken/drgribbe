import { useTranslations } from 'next-intl'

import { BgColors } from '@/app/types'
import { BAImage } from '@/components/layout/beforeafterimages'
import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Card } from '@/components/surfaces/Card'
import { A } from '@/components/typography/A'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { H3 } from '@/components/typography/H3'
import { P } from '@/components/typography/P'
import anatomy_11 from '@/public/images/anatomiskaforeefter-1.1-500px.jpg'
import anatomy_12 from '@/public/images/anatomiskaforeefter-1.2-500px.jpg'
import anatomy_21 from '@/public/images/anatomiskaforeefter-2.1-500px.jpg'
import anatomy_22 from '@/public/images/anatomiskaforeefter-2.2-500px.jpg'
import anatomy_31 from '@/public/images/anatomiskaforeefter-3.1-500px.jpg'
import anatomy_32 from '@/public/images/anatomiskaforeefter-3.2-500px.jpg'
import highRound11 from '@/public/images/ba-fixed/runda-hog-implantat-1-1-500px.png'
import highRound12 from '@/public/images/ba-fixed/runda-hog-implantat-1-2-500px.png'
import highRound21 from '@/public/images/ba-fixed/runda-hog-implantat-2-1-500px.png'
import highRound22 from '@/public/images/ba-fixed/runda-hog-implantat-2-2-500px.png'
import highRound31 from '@/public/images/ba-fixed/runda-hog-implantat-3-1-500px.png'
import highRound32 from '@/public/images/ba-fixed/runda-hog-implantat-3-2-500px.png'
import lowRound11 from '@/public/images/ba-fixed/runda-implantat-1.1-500px.png'
import lowRound12 from '@/public/images/ba-fixed/runda-implantat-1.2-500px.png'
import lowRound21 from '@/public/images/ba-fixed/runda-implantat-2.1-500px.png'
import lowRound22 from '@/public/images/ba-fixed/runda-implantat-2.2-500px.png'
import lowRound31 from '@/public/images/ba-fixed/runda-implantat-3.1-500px.png'
import lowRound32 from '@/public/images/ba-fixed/runda-implantat-3.2-500px.png'
import medRound11 from '@/public/images/ba-fixed/runda-mellan-implantat-1-1-500px.png'
import medRound12 from '@/public/images/ba-fixed/runda-mellan-implantat-1-2-500px.png'
import medRound21 from '@/public/images/ba-fixed/runda-mellan-implantat-2-1-500px.png'
import medRound22 from '@/public/images/ba-fixed/runda-mellan-implantat-2-2-500px.png'
import medRound31 from '@/public/images/ba-fixed/runda-mellan-implantat-3-1-500px.png'
import medRound32 from '@/public/images/ba-fixed/runda-mellan-implantat-3-2-500px.png'

const ForeOchEfter = () => {
  const t = useTranslations('foreOchEfter')
  const tc = useTranslations('common')

  return (
    <>
      <Card
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <SpaceContainer noPadding>
              <H1 white>{t('title')}</H1>
            </SpaceContainer>
          </Pillar>
        }
      />

      {/* round before after       */}
      <Card
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <div>
            <Pillar>
              <H2>{t('round_title')}</H2>
              <P>{t('round_preamble')}</P>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_lowprofileheading')}</H3>
              </SpaceContainer>
              <div className="gap-y1 columns-3">
                <div>
                  <BAImage beforeimage={lowRound11} afterimage={lowRound12} />
                </div>
                <div>
                  <BAImage beforeimage={lowRound21} afterimage={lowRound22} />
                </div>
                <div>
                  <BAImage beforeimage={lowRound31} afterimage={lowRound32} />
                </div>
              </div>
              <P className="mt-4">{t('round_lowprofileinfotext')}</P>
            </Pillar>
            <Pillar>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_mediumprofileheading')}</H3>
              </SpaceContainer>
              <div className="gap-y1 columns-3">
                <div>
                  <BAImage beforeimage={medRound11} afterimage={medRound12} />
                </div>
                <div>
                  <BAImage beforeimage={medRound21} afterimage={medRound22} />
                </div>
                <div>
                  <BAImage beforeimage={medRound31} afterimage={medRound32} />
                </div>
              </div>
              <P className="mt-4">{t('round_mediumprofileinfotext')}</P>
            </Pillar>
            <Pillar>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_highprofileheading')}</H3>
              </SpaceContainer>
              <div className="gap-y1 columns-3">
                <div>
                  <BAImage beforeimage={highRound11} afterimage={highRound12} />
                </div>
                <div>
                  <BAImage beforeimage={highRound21} afterimage={highRound22} />
                </div>
                <div>
                  <BAImage beforeimage={highRound31} afterimage={highRound32} />
                </div>
              </div>
              <P className="mt-4">{t('round_highprofileinfotext')}</P>
            </Pillar>
          </div>
        }
      />
      <Card
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <div>
            <Pillar>
              <H2>{t('anatomy_title')}</H2>
              <P>{t('anatomy_preamble')}</P>
              <div className="gap-y1 columns-3">
                <div>
                  <BAImage beforeimage={anatomy_11} afterimage={anatomy_12} />
                </div>
                <div>
                  <BAImage beforeimage={anatomy_21} afterimage={anatomy_22} />
                </div>
                <div>
                  <BAImage beforeimage={anatomy_31} afterimage={anatomy_32} />
                </div>
              </div>
              <P className="mt-4">{t('anatomy_infotext')}</P>
            </Pillar>
          </div>
        }
      />

      <Card
        bgColor={BgColors.Green}
        bgPosition="left"
        content={
          <>
            <H2 upperCase white className="text-center">
              {tc('freeConsultation')}
            </H2>
            <div className="m-auto flex max-w-xs justify-center">
              <A href="/boka" className="uppercase" buttonStyle>
                {tc('bookNow')}
              </A>
            </div>
          </>
        }
      />
    </>
  )
}

export default ForeOchEfter
