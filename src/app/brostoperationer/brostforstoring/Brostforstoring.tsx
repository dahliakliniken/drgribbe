import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SimpleCard } from '@/app/components/surfaces/SimpleCard'
import { AnchorLink } from '@/app/components/typography/AnchorLink'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { BgColors } from '@/app/types'
import { useTranslations } from 'next-intl'

const Brostforstoring = () => {
  const t = useTranslations('brostforstoring')
  return (
    <main className="mb-36 flex flex-col">
      <SimpleCard
        bgColor={BgColors.Green}
        bgPosition="right"
        content={
          <Pillar>
            <H1 white>{t('title')}</H1>
            <H2 white>{t('background.heading1')}</H2>
            <P white>{t('background.text1')}</P>
            <P white>{t('background.text2')}</P>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="left"
        content={
          <Pillar>
            <Section>
              <H2>{t('technique.heading1')}</H2>
              <P>{t('technique.text1')}</P>

              <H3>{t('technique.heading2')}</H3>
              <P>{t('technique.text2')}</P>

              <H3>{t('technique.heading3')}</H3>
              <P>
                {t.rich('technique.text3', {
                  link: (chunks) => (
                    <AnchorLink href="#placering">{chunks}</AnchorLink>
                  )
                })}
              </P>
              <H3>{t('technique.heading4')}</H3>
              <P>{t('technique.text4')}</P>
              <H3>{t('technique.heading5')}</H3>
              <P>{t('technique.text5')}</P>
            </Section>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.White}
        bgPosition="right"
        content={
          <Pillar>
            <Section>
              <H3>{t('technique.heading6')}</H3>
              <P>{t('technique.text6_1')}</P>
              <P>{t('technique.text6_2')}</P>
              <P>{t('technique.text6_3')}</P>

              <H3>{t('technique.heading7')}</H3>
              <P>{t('technique.text7')}</P>

              <H3>{t('technique.heading8')}</H3>
              <P>{t('technique.text8')}</P>

              <H3>{t('technique.heading9')}</H3>
              <P>{t('technique.text9')}</P>
            </Section>
          </Pillar>
        }
      />

      <SimpleCard
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
            <H2 id="placering" white>
              {t('placement.heading1')}
            </H2>
            <P white>{t('placement.text1')}</P>
            <P white>{t('placement.text2')}</P>
          </Pillar>
        }
      />
    </main>
  )
}

export default Brostforstoring
