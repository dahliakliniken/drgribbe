import { useTranslations } from 'next-intl';
import Footer from './components/navigation/Footer';
import BookConsultationButton from './components/inputs/BookConsultationButton';
import About from './about/page';
import Logo from './components/navigation/Logo'; // Importera din logga här
import DropdownMenu from './components/navigation/DropdownMenu'; // Importera din meny här
const Page: React.FC = () => {
    const t = useTranslations();
    return (
        <div className="flex flex-col min-h-screen">
            {/* Home Section */}
            <section className="min-h-screen bg-[url('/images/Welcome.png')] bg-cover md:bg-contain bg-center flex flex-col justify-center items-center relative">
                <header className="flex items-center justify-between p-4">
                    <Logo /> {/* Logga */}
                    <DropdownMenu /> {/* Dropdown meny */}
                </header>
                <main className="flex-grow grid items-center justify-items-center gap-16 p-8 pb-8 sm:p-20">
                    {/* Main content for Home */}
                </main>
                {/* Boka Konsultation-knapp - endast synlig i hemsektionen */}
                <div className="absolute bottom-12">
                    <BookConsultationButton />
                </div>
            </section>
            {/* Om Kliniken Section */}
            <section className="min-h-screen flex flex-col justify-center items-center bg-white">
                <About /> 
            </section>
            <Footer />
        </div>
    );
}
export default Page;
