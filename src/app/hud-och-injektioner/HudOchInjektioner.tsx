import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Pillar } from '@/components/layout/Pillar'
import { SpaceContainer } from '@/components/layout/SpaceContainer'
import { Accordion } from '@/components/surfaces/Accordion'
import { Card } from '@/components/surfaces/Card'
import { H1 } from '@/components/typography/H1'
import { H2 } from '@/components/typography/H2'
import { P } from '@/components/typography/P'
import Botoxface from '@/public/images/hudochinjektioner_opt.png'

import { BgColors } from '../types'
import { useAccordionItems } from './accordionData'

const HudOchInjektioner = () => {
  const t = useTranslations('hud-och-injektioner.page')
  const tMuscleRelaxation = useTranslations(
    'treatmentBox.treatments.muscleRelaxation'
  )
  const [treatmentAreasItems, otherAreasItems] = useAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <P white>{t('text1')}</P>
            <P white>{tMuscleRelaxation('paragraph3')}</P>
          </Pillar>
        }
      />
      <SpaceContainer>
        <Pillar>
          <SpaceContainer noPadding spaceTop>
            <H2>{t('treatmentAreas.heading')}</H2>
            <P>{t('treatmentAreas.text1')}</P>
          </SpaceContainer>
          <SpaceContainer noPadding spaceTop>
            <Image
              src={Botoxface}
              alt={''}
              className="max-h-[calc(100dvh-80px)] object-cover object-center"
            />
          </SpaceContainer>

          <SpaceContainer noPadding spaceTop>
            <Accordion coral items={treatmentAreasItems} />
          </SpaceContainer>

          <SpaceContainer noPadding spaceTop>
            <H2>{t('otherAreas.heading')}</H2>
            <P>{t('otherAreas.text1')}</P>
          </SpaceContainer>

          <SpaceContainer noPadding spaceTop>
            <Accordion coral items={otherAreasItems} />
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>
      <SpaceContainer>
        <Pillar>
          <H2>{t('effect.heading')}</H2>
          <P>{t('effect.text1')}</P>
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.White}
        bgPosition="left-top"
        content={
          <Pillar noPadding>
            <H2>{t('heading2')}</H2>
            <P>{t('text2')}</P>
            <P>{t('text3')}</P>
            <P>{t('text4')}</P>
            <P>{t('text5')}</P>
            <P>{t('text6')}</P>
            <P>{t('text7')}</P>
          </Pillar>
        }
      />

      <SpaceContainer>
        <Pillar>
          <H2>{t('risks.heading')}</H2>
          <P>{t('risks.text1')}</P>
        </Pillar>
      </SpaceContainer>
    </>
  )
}

export default HudOchInjektioner
