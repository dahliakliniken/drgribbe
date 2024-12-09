import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const Brostforstoring = () => {
  const t = useTranslations('brostforstoring')
  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer>
        <Pillar>
          <H1>{t('title')}</H1>
          <Section>
            <H2>{t('background.heading1')}</H2>
            <P>{t('background.text1')}</P>
            <P>{t('background.text2')}</P>
          </Section>

          <Section>
            <H2>{t('technique.heading1')}</H2>
            <P>{t('technique.text1')}</P>

            <H3>{t('technique.heading2')}</H3>
            <P>{t('technique.text2')}</P>

            <H3>{t('technique.heading3')}</H3>
            <P>
              {t.rich('technique.text3', {
                link: (chunks) => (
                  <Link
                    className="underline underline-offset-2 hover:text-coral"
                    href="#"
                  >
                    {chunks}
                  </Link>
                )
              })}
            </P>

            <H3>{t('technique.heading4')}</H3>
            <P>{t('technique.text4')}</P>

            <H3>{t('technique.heading5')}</H3>
            <P>{t('technique.text5')}</P>

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

          <Section>
            <H2>{t('placement.heading1')}</H2>
            <P>{t('placement.text1')}</P>
            <P>{t('placement.text2')}</P>
          </Section>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Brostforstoring
