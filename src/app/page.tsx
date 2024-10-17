import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Footer from './components/navigation/Footer';
import BookConsultationButton from './components/inputs/BookConsultationButton';

export default function Home() {
    const t = useTranslations();

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow grid items-center justify-items-center gap-16 p-8 pb-8 font-[family-name:var(--font-geist-sans)] sm:p-20">
                <h1 className="text-center text-4xl font-bold sm:text-5xl">
                    {t('home.title')}
                </h1>
                <p>{t('home.description')}</p>
                <Link href="/about">{'Om kliniken'}</Link>
            </main>
            <div className="flex items-center justify-center min-h-screen">
            <BookConsultationButton />
            <Footer />
        </div>    
        </div>
    );
}
