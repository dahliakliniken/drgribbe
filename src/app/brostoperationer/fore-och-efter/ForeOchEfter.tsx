import { useTranslations } from 'next-intl'
import { Pillar } from '../../components/layout/Pillar'
import { H1 } from '../../components/typography/H1'
import { H2 } from '../../components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { BgColors } from '@/app/types'
import Image from 'next/image'

import lowRound11 from '../../../../public/images/runda-implantat-1.1-500px.jpg'
import lowRound12 from '../../../../public/images/runda-implantat-1.2-500px.jpg'

import lowRound21 from '../../../../public/images/runda-implantat-2.1-500px.jpg'
import lowRound22 from '../../../../public/images/runda-implantat-2.2-500px.jpg'

import lowRound31 from '../../../../public/images/runda-implantat-3.1-500px.jpg'
import lowRound32 from '../../../../public/images/runda-implantat-3.2-500px.jpg'

const ForeOchEfter = () => {
  const t = useTranslations('foreOchEfter')

  return (
    <main className="mb-36 flex flex-col">

      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
        <Pillar>
          <SpaceContainer>
            <H1 white>{t('title')}</H1>
            <P white>{t('preamble')}</P>
          </SpaceContainer>
        </Pillar>
        }
      />

      {/* lowprofile       */}
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
                    <Image
                        src={lowRound11}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound12}
                        alt={t('')}
                        className=""
                      />
                  </div>       
                  <div>
                    <Image
                        src={lowRound21}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound22}
                        alt={t('')}
                        className=""
                      />
                  </div>           
                  <div>
                    <Image
                        src={lowRound31}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound32}
                        alt={t('')}
                        className=""
                      />
                  </div>               
              </div>  
              <P className='mt-4'>{t('round_lowprofileinfotext')}</P>
            </Pillar>        
            <Pillar>
              <SpaceContainer spaceTop noPadding>
                <H2>{t('round_mediumprofileheading')}</H2>
              </SpaceContainer>
              <div className='columns-3 gap-y1'>
                  <div>
                    <Image
                        src={lowRound11}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound12}
                        alt={t('')}
                        className=""
                      />
                  </div>       
                  <div>
                    <Image
                        src={lowRound21}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound22}
                        alt={t('')}
                        className=""
                      />
                  </div>           
                  <div>
                    <Image
                        src={lowRound31}
                        alt={t('')}
                        className="mb-4"
                      />
                      <Image
                        src={lowRound32}
                        alt={t('')}
                        className=""
                      />
                  </div>               
              </div>  
              <P className='mt-4'>{t('round_mediumprofileinfotext')}</P>
            </Pillar> 
          </div>
        }
      />

      {/* mediumprofile       */}
      <SimpleCard
        bgColor={BgColors.White}
        bgPosition='left'
        content={
          <SpaceContainer>
       
          </SpaceContainer>
        }
      />
      
    </main>
  )
}

export default ForeOchEfter
