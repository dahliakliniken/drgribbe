import { useTranslations } from 'next-intl'
import { Pillar } from '../../components/layout/Pillar'
import { H1 } from '../../components/typography/H1'
import { H2 } from '../../components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { BgColors } from '@/app/types'
import { BAImage } from '@/app/components/layout/beforeafterimages'
import { A } from '@/app/components/typography/A'

import lowRound11 from '../../../../public/images/runda-implantat-1.1-500px.jpg'
import lowRound12 from '../../../../public/images/runda-implantat-1.2-500px.jpg'
import lowRound21 from '../../../../public/images/runda-implantat-2.1-500px.jpg'
import lowRound22 from '../../../../public/images/runda-implantat-2.2-500px.jpg'
import lowRound31 from '../../../../public/images/runda-implantat-3.1-500px.jpg'
import lowRound32 from '../../../../public/images/runda-implantat-3.2-500px.jpg'

import medRound11 from '../../../../public/images/runda-mellan-implantat-1-1-500px.jpg'
import medRound12 from '../../../../public/images/runda-mellan-implantat-1-2-500px.jpg'
import medRound21 from '../../../../public/images/runda-mellan-implantat-2-1-500px.jpg'
import medRound22 from '../../../../public/images/runda-mellan-implantat-2-2-500px.jpg'
import medRound31 from '../../../../public/images/runda-mellan-implantat-3-1-500px.jpg'
import medRound32 from '../../../../public/images/runda-mellan-implantat-3-2-500px.jpg'

import highRound11 from '../../../../public/images/runda-hog-implantat-1-1-500px.jpg'
import highRound12 from '../../../../public/images/runda-hog-implantat-1-2-500px.jpg'
import highRound21 from '../../../../public/images/runda-hog-implantat-2-1-500px.jpg'
import highRound22 from '../../../../public/images/runda-hog-implantat-2-2-500px.jpg'
import highRound31 from '../../../../public/images/runda-hog-implantat-3-1-500px.jpg'
import highRound32 from '../../../../public/images/runda-hog-implantat-3-2-500px.jpg'

const ForeOchEfter = () => {
  const t = useTranslations('foreOchEfter')
  const tc = useTranslations('common')

  return (
    <main className="mb-36 flex flex-col">

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
        <Pillar>
          <SpaceContainer noPadding>
            <H1 white>{t('title')}</H1>
            <P white>{t('preamble')}</P>
          </SpaceContainer>
        </Pillar>
        }
      />

      {/* round before after       */}
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition='right'
        content={
          <div>
            <Pillar>
              <H2>{t('round_title')}</H2>
              <P>{t('round_preamble')}</P>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_lowprofileheading')}</H3>
              </SpaceContainer>
              <div className='columns-3 gap-y1'>
                  <div>
                    <BAImage
                        beforeimage={lowRound11}
                        afterimage={lowRound12}
                    />
                  </div>       
                  <div>
                    <BAImage
                        beforeimage={lowRound21}
                        afterimage={lowRound22}
                    />
                  </div>           
                  <div>
                    <BAImage
                          beforeimage={lowRound31}
                          afterimage={lowRound32}
                      />
                  </div>               
              </div>  
              <P className='mt-4'>{t('round_lowprofileinfotext')}</P>
            </Pillar>        
            <Pillar>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_mediumprofileheading')}</H3>
              </SpaceContainer>
              <div className='columns-3 gap-y1'>
                  <div>
                    <BAImage
                        beforeimage={medRound11}
                        afterimage={medRound12}
                    />                  
                  </div>       
                  <div>
                  <BAImage
                        beforeimage={medRound21}
                        afterimage={medRound22}
                    />
                  </div>           
                  <div>
                    <BAImage
                        beforeimage={medRound31}
                        afterimage={medRound32}
                    />
                  </div>               
              </div>  
              <P className='mt-4'>{t('round_mediumprofileinfotext')}</P>
            </Pillar>
            <Pillar>
              <SpaceContainer spaceTop noPadding>
                <H3>{t('round_highprofileheading')}</H3>
              </SpaceContainer>
              <div className='columns-3 gap-y1'>
                  <div>
                    <BAImage
                        beforeimage={highRound11}
                        afterimage={highRound12}
                    />                  
                  </div>       
                  <div>
                  <BAImage
                        beforeimage={highRound21}
                        afterimage={highRound22}
                    />
                  </div>           
                  <div>
                    <BAImage
                        beforeimage={highRound31}
                        afterimage={highRound32}
                    />
                  </div>               
              </div>  
              <P className='mt-4'>{t('round_highprofileinfotext')}</P>
            </Pillar>             
          </div>
        }
      />     
      <SimpleCard
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
    </main>
  )
}

export default ForeOchEfter
