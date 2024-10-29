import BookConsultationButton from './components/inputs/BookConsultationButton'
import ImageBox from './components/layout/ImageBox'
import TreatmentBox from './components/layout/TreatmentBox'
import H2 from './components/typography/H2'
import Card from './components/surfaces/Card'
import { useTranslations } from 'next-intl'
import SpaceContainer from './components/layout/SpaceContainer'
import P from './components/typography/P'
import HeaderWithFooter from './components/HeaderWithFooter'

const Page: React.FC = () => {
  const t = useTranslations()
  return (
    <>
      <HeaderWithFooter />
      <main className="mb-56 flex flex-col">
        <section className="relative flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-[url('/images/Welcome.png')] bg-cover bg-center bg-no-repeat md:bg-contain">
          <div className="absolute bottom-12">
            <BookConsultationButton />
          </div>
        </section>

        <Card
          bgColor="bg-coral"
          bgLeft
          title={<H2 white>{t('aboutBox.title')}</H2>}
          fullWidth
          paragraphs={[t('aboutBox.paragraph1'), t('aboutBox.paragraph2')]}
        />

        <div className="flex w-full justify-center p-0">
          <ImageBox />
        </div>

        <TreatmentBox />

        {/* About Section */}
        <SpaceContainer spaceVertically>
          <H2>{t('aboutClinic.title')}</H2>
          <P>{t('aboutClinic.paragraph1')}</P>
          <P>{t('aboutClinic.paragraph2')}</P>
        </SpaceContainer>
      </main>
    </>
  )
}

export default Page
