import { useTranslations } from 'next-intl'
import Footer from './components/navigation/Footer'
import BookConsultationButton from './components/inputs/BookConsultationButton'
import About from './about/page'
import Logo from './components/navigation/Logo'
import DropdownMenu from './components/navigation/DropdownMenu'
import Textbox from './components/layout/Textbox'
import ImageBox from './components/layout/ImageBox'
import TreatmentBox from './components/layout/TreatmentBox'

const Page: React.FC = () => {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col bg-[#EAE6E3]">
      {/* Main background color */}
      {/* Home Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-[url('/images/Welcome.png')] bg-cover bg-center md:bg-contain">
        <main className="grid flex-grow items-center justify-items-center gap-16 p-8 pb-8 sm:p-20">
          {/* Main content for Home */}
        </main>
        <div className="absolute bottom-12">
          <BookConsultationButton />
        </div>
      </section>

      {/* Textbox component */}
      <Textbox />

      {/* ImageBox */}
      <ImageBox />

      {/* TreatmentBox (Added after ImageBox) */}
      <div className="relative">
        <TreatmentBox />
      </div>

      {/* About Section */}
      <section className="flex min-h-screen flex-col items-center justify-center bg-white">
        <About />
      </section>

      {/* Header with Logo and Dropdown Menu */}
      <header className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-[#EAE6E3] p-4">
        <Logo />
        <DropdownMenu />
      </header>

      <Footer />
    </div>
  )
}

export default Page
