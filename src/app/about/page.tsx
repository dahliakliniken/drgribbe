import { useTranslations } from 'next-intl'

const About = () => {
  const t = useTranslations()

  return (
    <div className="min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main>
        <h1 className="text-4xl font-bold sm:text-5xl">{t('about.title')}</h1>
      </main>
    </div>
  )
}

export default About
