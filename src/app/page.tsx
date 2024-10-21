import { useTranslations } from 'next-intl';
import Footer from './components/navigation/Footer';
import BookConsultationButton from './components/inputs/BookConsultationButton';
import About from './about/page';

export default function Home() {
    const t = useTranslations();

        return (
            <div className="flex flex-col min-h-screen">
                <header className="flex items-center justify-between p-4">
                </header>
                <main className="flex-grow grid items-center justify-items-center gap-16 p-8 pb-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
                    {}
                </main>
                <div className="flex items-center justify-center min-h-screen">
                    <BookConsultationButton />
                    <Footer />
            </div>
            <About /> 
        </div>
    );
}

