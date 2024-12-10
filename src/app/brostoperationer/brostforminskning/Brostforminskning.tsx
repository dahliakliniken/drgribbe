import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostforminskning = () => {
  const t = useTranslations('brostforminskning')
  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer>
        <Pillar>
          <H1>{t('title')}</H1>
          <Section>
            <H2>{t('background.heading1')}</H2>
            <P>{t('background.text1')}</P>
            <P>{t('background.text1')}</P>
            <P>{t('background.text1')}</P>
          </Section>

          <Section>
            <H2>{t('technique.heading1')}</H2>
            <H3>{t('technique.preSurgery.heading1')}</H3>
            <P>{t('technique.preSurgery.text1')}</P>
          </Section>

          <Section>
            <H3>{t('technique.surgery.heading1')}</H3>
            <P>{t('technique.surgery.text1')}</P>
          </Section>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Brostforminskning
