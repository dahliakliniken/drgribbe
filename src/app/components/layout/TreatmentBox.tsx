import React from 'react'
import { useTranslations } from 'next-intl'
import Card from '../surfaces/Card'
import H2 from '../typography/H2'

const TreatmentBox: React.FC = () => {
  const t = useTranslations()

  const treatments = [
    {
      title: t('treatmentBox.treatments.breast_reduction'),
      image: '/path/to/breast-reduction-image.jpg', // Ange bildens URL för bröstförminskning
      paragraphs: ['Ipsun Lorem']
    },
    {
      title: t('treatmentBox.treatments.breast_enlargement'),
      image: '/path/to/breast-enlargement-image.jpg', // Ange bildens URL för bröstförstoring
      paragraphs: ['Lorem Ipsun']
    },
    {
      title: t('treatmentBox.treatments.muscle_relaxation'),
      image: '/path/to/muscle-relaxation-image.jpg', // Ange bildens URL för muskelavslappning
      paragraphs: ['Description of the treatment']
    }
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-0 bg-[#FFFFFF]">
      <div className="mt-10">
        <H2>{t('treatmentBox.title')}</H2>
      </div>

      <div className="mt-8 flex w-full gap-[30px] overflow-x-scroll">
        {treatments.map((treatment, index) => (
          <div key={index} className="flex-shrink-0">
            <Card
              title={treatment.title}
              paragraphs={treatment.paragraphs}
              bgColor="bg-[#0C412F]"
              image={treatment.image} // Skicka bild-URL till kortet
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TreatmentBox
