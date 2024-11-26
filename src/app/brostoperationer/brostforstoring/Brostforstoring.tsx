import { Pillar } from '@/app/components/layout/Pillar'
import { Section } from '@/app/components/layout/Section'
import { SpaceContainer } from '@/app/components/layout/SpaceContainer'
import { H1 } from '@/app/components/typography/H1'
import { H2 } from '@/app/components/typography/H2'
import { H3 } from '@/app/components/typography/H3'
import { P } from '@/app/components/typography/P'
import { useTranslations } from 'next-intl'

const Brostforstoring = () => {
  const t = useTranslations('brostforstoring')
  return (
    <main className="mb-36 flex flex-col">
      <SpaceContainer spaceVertically>
        <Pillar>
          <Section>
            <H1>{t('title')}</H1>
            <P>{t('introduction')}</P>
            <P>{t('experience')}</P>
            <P>{t('benefitsOfImplants')}</P>
            <P>{t('procedureSafety')}</P>
          </Section>

          <Section>
            <H2>{t('operation.title')}</H2>
            <P>{t('operation.text')}</P>
          </Section>

          <Section>
            <H3>{t('incisionUnderBreast.title')}</H3>
            <P>{t('incisionUnderBreast.text1')}</P>
            <P>{t('incisionUnderBreast.text2')}</P>
            <P>{t('incisionUnderBreast.text3')}</P>
            <P>{t('incisionUnderBreast.text4')}</P>
            <P>{t('incisionUnderBreast.text5')}</P>
            <P>{t('incisionUnderBreast.text6')}</P>
            <P>{t('incisionUnderBreast.text7')}</P>
          </Section>

          <Section>
            <H3>{t('pocketForImplants.title')}</H3>
            <P>{t('pocketForImplants.text1')}</P>
          </Section>

          <Section>
            <H3>{t('placement.title')}</H3>
            <P>{t('placement.text1')}</P>
            <P>{t('placement.text2')}</P>
            <P>{t('placement.text3')}</P>
            <P>{t('placement.text4')}</P>
            <P>{t('placement.text5')}</P>
            <P>{t('placement.text6')}</P>
          </Section>

          <Section>
            <H3>{t('cleavage.title')}</H3>
            <P>{t('cleavage.text1')}</P>
            <P>{t('cleavage.text2')}</P>
            <P>{t('cleavage.text3')}</P>
            <P>{t('cleavage.text4')}</P>
            <P>{t('cleavage.text5')}</P>
            <P>{t('cleavage.text6')}</P>
          </Section>

          <Section>
            <H3>{t('asymmetry.title')}</H3>
            <P>{t('asymmetry.text1')}</P>
            <P>{t('asymmetry.text2')}</P>
          </Section>

          <Section>
            <H3>{t('differentSizes.title')}</H3>
            <P>{t('differentSizes.text1')}</P>
            <P>{t('differentSizes.text2')}</P>
            <P>{t('differentSizes.text3')}</P>
          </Section>

          <Section>
            <H3>{t('differentBreastSagging.title')}</H3>
            <P>{t('differentBreastSagging.text1')}</P>
          </Section>

          <Section>
            <H3>{t('differentSizeAndSagging.title')}</H3>
            <P>{t('differentSizeAndSagging.text1')}</P>
            <P>{t('differentSizeAndSagging.text2')}</P>
            <P>{t('differentSizeAndSagging.text3')}</P>
          </Section>

          <Section>
            <H3>{t('differentBreastFoldHeight.title')}</H3>
            <P>{t('differentBreastFoldHeight.text1')}</P>
          </Section>

          <Section>
            <H2>{t('postOperation.title')}</H2>
            <P>{t('postOperation.text1')}</P>
            <P>{t('postOperation.text2')}</P>
            <P>{t('postOperation.text3')}</P>
            <P>{t('postOperation.text4')}</P>
            <P>{t('postOperation.text5')}</P>
          </Section>

          <Section>
            <H2>{t('complications.title')}</H2>
            <H3>{t('capsularContracture.title')}</H3>
            <P>{t('capsularContracture.text1')}</P>
            <P>{t('capsularContracture.text2')}</P>
            <P>{t('capsularContracture.text3')}</P>
          </Section>

          <Section>
            <H3>{t('sensoryDisturbances.title')}</H3>
            <P>{t('sensoryDisturbances.text1')}</P>
            <P>{t('sensoryDisturbances.text2')}</P>
          </Section>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}

export default Brostforstoring
