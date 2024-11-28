import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostforminskning = () => {
  const t = useTranslations('brostforminskning')
  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer spaceVertically>
        <Pillar>
          <Section>
            <H1>{t('title')}</H1>
            <P>{t('introduction1')}</P>
            <P>{t('introduction2')}</P>
            <P>{t('introduction3')}</P>
          </Section>

          <Section>
            <H2>{t('operation.title')}</H2>
            <P>{t('operation.text1')}</P>
            <P>{t('operation.text2')}</P>
            <P>{t('operation.text3')}</P>
            <P>{t('operation.text4')}</P>
            <P>{t('operation.text5')}</P>
          </Section>

          <Section>
            <H2>{t('postOperation.title')}</H2>
            <P>{t('postOperation.text1')}</P>
            <P>{t('postOperation.text2')}</P>
            <P>{t('postOperation.text3')}</P>
            <P>{t('postOperation.text4')}</P>
            <P>{t('postOperation.text5')}</P>
          </Section>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Brostforminskning
