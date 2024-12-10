import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostlyft = () => {
  const t = useTranslations('brostlyft')
  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <H1>{t('title')}</H1>
        <Section>
          <H2>{t('background.heading1')}</H2>
          <P>{t('background.text1')}</P>
          <P>{t('background.text2')}</P>
          <P>{t('background.text3')}</P>
          <P>{t('background.text4')}</P>
        </Section>

        <Section>
          <H2>{t('consultation.heading1')}</H2>
          <P>{t('consultation.text1')}</P>
        </Section>

        <Section>
          <H2>{t('techniques.heading1')}</H2>
          <P>{t('techniques.text1')}</P>
          <P>{t('techniques.text2')}</P>
        </Section>
      </Pillar>
    </main>
  )
}

export default Brostlyft
