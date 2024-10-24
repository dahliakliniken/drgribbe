import { useTranslations } from 'next-intl'
import H2 from '../components/typography/H2'
import P from '../components/typography/P'

const About: React.FC = () => {
  const t = useTranslations()

  return (
    <div className="flex flex-col min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex-grow">
        {/* Använd H2-komponenten istället för <h1> */}
        <H2>{t('about.title')}</H2>

        {/* Använd P-komponenten istället för <p> */}
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
          Donec vel dolor a velit luctus gravida. Sed nec consequat dolor, sit amet varius odio. Integer
          tincidunt mauris non augue fermentum, a elementum sapien euismod. Nulla facilisi. Etiam non purus
          euismod, dapibus sem nec, scelerisque justo.
        </P>
        <P>
          Duis nec nisi sit amet elit congue vehicula. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Sed egestas metus et ultricies cursus. Praesent sodales mi ut
          libero placerat, ac egestas leo interdum. Cras ut purus eget metus fermentum pretium in at nisl.
          Quisque fringilla libero et dolor vestibulum, a finibus odio tincidunt.
        </P>
      </main>
    </div>
  )
}

export default About
