import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Card } from '../surfaces/Card'
import { CardRow } from '../surfaces/CardRow'
import { H3 } from '../typography/H3'
import { BgColors, BgPositions } from '@/app/types'

type TreatmentBoxProps = {
  treatments: {
    id: string
    title: string
    paragraphs: string[]
    image: string
    linkHref: string
    linkText: string
    bgPosition?: keyof typeof BgPositions
  }[]
}

export const TreatmentBox = ({ treatments }: TreatmentBoxProps) => {
  const t = useTranslations()

  return (
    <CardRow>
      {treatments.map((treatment) => (
        <Card
          key={treatment.id}
          title={<H3 white>{t(treatment.title)}</H3>}
          paragraphs={treatment.paragraphs.map((paragraph) => t(paragraph))}
          bgColor={BgColors.Green}
          smallText
          image={
            <Image
              className="m-auto my-6"
              src={treatment.image}
              alt={''}
              height={125}
            />
          }
          oneColumn
          rounded
          linkHref={treatment.linkHref}
          linkText={t(treatment.linkText)}
          clickable
          cardList
          bgPosition={treatment.bgPosition}
        />
      ))}
    </CardRow>
  )
}
