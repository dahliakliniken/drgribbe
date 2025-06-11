import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Botoxface from '../../../public/images/ansiktsmuskler.jpeg'
import { Pillar } from '../components/layout/Pillar'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { Accordion } from '../components/surfaces/Accordion'
import { Card } from '../components/surfaces/Card'
import { H1 } from '../components/typography/H1'
import { H2 } from '../components/typography/H2'
import { P } from '../components/typography/P'
import { BgColors } from '../types'
import { useAccordionItems } from './accordionData'

const HudOchInjektioner = () => {
  const t = useTranslations()
  const [treatmentAreasItems, otherAreasItems] = useAccordionItems()

  return (
    <>
      <Card
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('hudochinjektioner.title')}</H1>
            <P white>{t('hudochinjektioner.text1')}</P>
            <P white>
              {t('treatmentBox.treatments.muscleRelaxation.paragraph3')}
            </P>
          </Pillar>
        }
      />
      <SpaceContainer>
        <Pillar>
          <SpaceContainer noPadding spaceTop>
            <H2>{t('hudochinjektioner.treatmentAreas.heading')}</H2>
            <P>{t('hudochinjektioner.treatmentAreas.text1')}</P>
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
            <H2>{t('hudochinjektioner.otherAreas.heading')}</H2>
            <P>{t('hudochinjektioner.otherAreas.text1')}</P>
          </SpaceContainer>

          <SpaceContainer noPadding spaceTop>
            <Accordion coral items={otherAreasItems} />
          </SpaceContainer>
        </Pillar>
      </SpaceContainer>
      <SpaceContainer>
        <Pillar>
          <H2>{t('hudochinjektioner.effect.heading')}</H2>
          <P>{t('hudochinjektioner.effect.text1')}</P>
        </Pillar>
      </SpaceContainer>
      <Card
        bgColor={BgColors.White}
        bgPosition="left-top"
        content={
          <Pillar noPadding>
            <H2>{t('hudochinjektioner.heading2')}</H2>
            <P>{t('hudochinjektioner.text2')}</P>
            <P>{t('hudochinjektioner.text3')}</P>
            <P>{t('hudochinjektioner.text4')}</P>
            <P>{t('hudochinjektioner.text5')}</P>
            <P>{t('hudochinjektioner.text6')}</P>
            <P>{t('hudochinjektioner.text7')}</P>
          </Pillar>
        }
      />

      <SpaceContainer>
        <Pillar>
          <H2>{t('hudochinjektioner.risks.heading')}</H2>
          <P>{t('hudochinjektioner.risks.text1')}</P>
        </Pillar>
      </SpaceContainer>
    </>
  )
}

export default HudOchInjektioner
