import { useTranslations } from 'next-intl';

const About: React.FC = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex-grow">
        <h1 className="text-4xl font-bold sm:text-5xl">{t('about.title')}</h1>
        <p className="mt-4 text-lg"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
          Donec vel dolor a velit luctus gravida. Sed nec consequat dolor, sit amet varius odio. 
          Integer tincidunt mauris non augue fermentum, a elementum sapien euismod. Nulla facilisi. 
          Etiam non purus euismod, dapibus sem nec, scelerisque justo. 
        </p>
        <p className="mt-4 text-lg">
          Duis nec nisi sit amet elit congue vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
          Sed egestas metus et ultricies cursus. Praesent sodales mi ut libero placerat, ac egestas leo interdum. 
          Cras ut purus eget metus fermentum pretium in at nisl. Quisque fringilla libero et dolor vestibulum, a finibus odio tincidunt.
        </p>
      </main>
    </div>
  );
};

export default About;
