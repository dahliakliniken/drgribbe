import React from 'react'
import { useTranslations } from 'next-intl'

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
      description: 'Beskrivning av behandlingen'
    }
  ]

  return (
    <div className="flex h-[597px] w-[393px] flex-col items-center justify-center gap-0 bg-[#FFFFFF]">
      {/* Titel */}
      <h2 className="font-[Josefin Sans] mt-4 h-[32px] w-[333px] text-center text-[32px] font-light leading-[32px]">
        {t('treatmentBox.title')}
      </h2>

      {/* Treatment cards with horizontal scrolling */}
      <div className="mt-4 flex w-full gap-[30px] overflow-x-scroll">
        {treatments.map((treatment, index) => (
          <div
            key={index}
            className="h-[561px] min-w-[331px] rounded-tl-[5px] border bg-[#0C412F] p-[22px] text-white"
          >
            <h3 className="text-xl font-semibold">{treatment.title}</h3>
            <p className="mt-4 text-sm">{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TreatmentBox
