import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostlyft = () => {
  const t = useTranslations('brostlyft')
  return (
    <main className="mb-36 flex flex-col">
      <Pillar>
        <H1>
          {t.rich('title', {
            span: (chunks) => <span className="block text-2xl">{chunks}</span>
          })}
        </H1>
        <P>{t('text1')}</P>
        <P>{t('text2')}</P>
        <P>{t('text3')}</P>
        <P>{t('text4')}</P>
        <P>{t('text5')}</P>

        <H2>{t('operation.title')}</H2>

        <Section>
          <H3>{t('operation.anchorScarLift.title')}</H3>
          <P>{t('operation.anchorScarLift.description')}</P>
          <P>{t('operation.anchorScarLift.details1')}</P>
          <P>{t('operation.anchorScarLift.details2')}</P>
        </Section>

        <Section>
          <H3>{t('operation.liftScarToFold.title')}</H3>
          <P>{t('operation.liftScarToFold.description')}</P>
          <P>{t('operation.liftScarToFold.limitations')}</P>
        </Section>

        <Section>
          <H3>{t('operation.liftScarAreola.title')}</H3>
          <P>{t('operation.liftScarAreola.description')}</P>
        </Section>

        {/* Section: After Operation */}
        <Section>
          <H3>{t('operation.afterOperation.title')}</H3>
          <P>{t('operation.afterOperation.steps1')}</P>
          <P>{t('operation.afterOperation.steps2')}</P>
          <P>{t('operation.afterOperation.steps3')}</P>
          <P>{t('operation.afterOperation.steps4')}</P>
          <P>{t('operation.afterOperation.steps5')}</P>
        </Section>
      </Pillar>
    </main>
  )
}

export default Brostlyft
