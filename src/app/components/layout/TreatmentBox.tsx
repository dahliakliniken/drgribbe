import React from 'react'
import { useTranslations } from 'next-intl'
import Card from '../surfaces/Card'
import H2 from '../typography/H2'
import Enlargement from '../../../../public/images/breast_enlargement.png'
import Reduction from '../../../../public/images/breast_reduction.png'
import CardRow from '../surfaces/CardRow'
import Pillar from './Pillar'

const TreatmentBox: React.FC = () => {
  const t = useTranslations()

  const treatments = [
    {
      title: t('treatmentBox.treatments.breast_reduction'),
      image: Reduction,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, augue sed tempor fermentum, dolor sem cursus purus, sed consequat justo massa sit amet turpis.',
        'Maecenas posuere tortor eget urna imperdiet aliquam. Nam a lacus et massa luctus vestibulum ut quis mi.'
      ]
    },
    {
      title: t('treatmentBox.treatments.breast_enlargement'),
      image: Enlargement,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, augue sed tempor fermentum, dolor sem cursus purus, sed consequat justo massa sit amet turpis.',
        'Maecenas posuere tortor eget urna imperdiet aliquam. Nam a lacus et massa luctus vestibulum ut quis mi.'
      ]
    },
    {
      title: t('treatmentBox.treatments.breast_reduction'),
      image: Reduction,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, augue sed tempor fermentum, dolor sem cursus purus, sed consequat justo massa sit amet turpis.',
        'Maecenas posuere tortor eget urna imperdiet aliquam. Nam a lacus et massa luctus vestibulum ut quis mi.'
      ]
    },
    {
      title: t('treatmentBox.treatments.breast_enlargement'),
      image: Enlargement,
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat, augue sed tempor fermentum, dolor sem cursus purus, sed consequat justo massa sit amet turpis.',
        'Maecenas posuere tortor eget urna imperdiet aliquam. Nam a lacus et massa luctus vestibulum ut quis mi.'
      ]
    }
    // {
    //   title: t('treatmentBox.treatments.muscle_relaxation'),
    //   image: '/path/to/muscle-relaxation-image.jpg', // Ange bildens URL för muskelavslappning
    //   paragraphs: ['Description of the treatment']
    // }
  ]

  return (
    <>
      <Pillar>
        <H2 upperCase>{t('treatmentBox.title')}</H2>
      </Pillar>

      <CardRow>
        {treatments.map((treatment, index) => (
          <Card
            key={index}
            title={treatment.title}
            paragraphs={treatment.paragraphs}
            bgColor="bg-[#0C412F]"
            image={treatment.image}
            oneColumn
            bgLeft
          />
        ))}
      </CardRow>
    </>
  )
}

export default TreatmentBox
