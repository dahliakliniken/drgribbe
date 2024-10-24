import React from 'react'
import { useTranslations } from 'next-intl'
import Card from '../surfaces/Card'
import H2 from '../typography/H2'

const TreatmentBox: React.FC = () => {
  const t = useTranslations()

  const treatments = [
    {
      title: t('treatmentBox.treatments.breast_reduction'),
      description: 'Ipsun Lorem'
    },
    {
      title: t('treatmentBox.treatments.breast_enlargement'),
      description: 'Lorem Ipsun'
    },
    {
      title: t('treatmentBox.treatments.muscle_relaxation'),
      description: 'Description of the treatment'
    }
  ]

  return (
    <div className="flex h-[597px] w-[393px] flex-col items-center justify-center gap-0 bg-[#FFFFFF]">
      {/* Use the H2 component for the main title */}
      <H2>{t('treatmentBox.title')}</H2>

      {/* Render treatment cards with horizontal scrolling */}
      <div className="mt-4 flex w-full gap-[30px] overflow-x-scroll">
        {treatments.map((treatment, index) => (
          <Card
            key={index}
            title={treatment.title}
            paragraphs={[treatment.description]}
            bgColor="bg-[#0C412F]" // Use green background for all cards
          />
        ))}
      </div>
    </div>
  )
}

export default TreatmentBox
