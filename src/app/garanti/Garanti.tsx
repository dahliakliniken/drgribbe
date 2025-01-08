import { useTranslations } from 'next-intl'
import { H1 } from '../components/typography/H1'
import { P } from '../components/typography/P'
import { SpaceContainer } from '../components/layout/SpaceContainer'
import { SimpleCard } from '../components/surfaces/SimpleCard'
import { H2 } from '../components/typography/H2'
import { Ul } from '../components/surfaces/Ul'
import { Li } from '../components/surfaces/Li'
import { Pillar } from '../components/layout/Pillar'
import { Section } from '../components/layout/Section'
import { BgColors } from '../types'

const Garanti = () => {
  const t = useTranslations()
  const securityPackagePoints = Object.keys(
    t.raw('garanti.securityPackage.points')
  ).map((key) => t(`garanti.securityPackage.points.${key}`))
  const philosophyPoints = Object.keys(
    t.raw('ourphilosophy.points')
  ).map((key) => t(`ourphilosophy.points.${key}`))


  return (
    <main className="mb-36 flex flex-col">
      <SimpleCard
        fullWidth
        bgColor={BgColors.Green}
        content={
          <div className="mx-auto max-w-3xl px-4 py-8">
            <P white>{t('garanti.preamble1')}</P>
            <P white>{t('garanti.preamble2')}</P>
          </div>
        }
      />

      <SpaceContainer spaceVertically>
        <Pillar>
          <Section>
            <H1>{t('garanti.title')}</H1>
            <P>{t('garanti.intro')}</P>
          </Section>

          <Section>
            <H2>{t('garanti.securityPackage.title')}</H2>
            <Ul>
              {securityPackagePoints.map((point, index) => (
                <Li key={index}>{point}</Li>
              ))}
            </Ul>
          </Section>

          <Section>
            <H2>{t('garanti.capsuleGuarantee.title')}</H2>
            <P>{t('garanti.capsuleGuarantee.price')}</P>
            <Ul>
              <Li>{t('garanti.capsuleGuarantee.points.point1')}</Li>
            </Ul>
          </Section>

          <Section>
            <H2>{t('garanti.followUps.title')}</H2>
            <P>{t('garanti.followUps.description')}</P>
          </Section>
        </Pillar>
      </SpaceContainer>

      <SimpleCard
        id="phil"
        fullWidth
        bgColor={BgColors.Coral}
        content={
          <Pillar>
            <H2 white>{t('ourphilosophy.heading')}</H2>
            <P white>{t('ourphilosophy.text1')}</P>
            <ol className="list-decimal space-y-6 pl-6 marker:text-lg marker:font-semibold marker:text-white">
            {philosophyPoints.map((point, index) => (
                <li className="text-white text-xl" key={index}>{point}</li>
              ))}
              
            </ol>
            <SpaceContainer noPadding spaceTop>
              <H2 white>{t('ourphilosophy.text2Heading')}</H2>
              <P white>{t('ourphilosophy.text2')}</P>
            </SpaceContainer>
          </Pillar>      
        }
      />
      <SpaceContainer>
        <Pillar>
          <H2>{t('ourphilosophy.heading2')}</H2>
          <P>{t('ourphilosophy.text3')}</P>
          <P>{t('ourphilosophy.text4')}</P>
          <H2>{t('ourphilosophy.heading3')}</H2>
          <P>{t('ourphilosophy.text5')}</P>
        </Pillar>
      </SpaceContainer>
    </main>
  )
}
export default Garanti
