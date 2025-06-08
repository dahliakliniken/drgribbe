import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import { BgColors, BgPositions } from '@/app/types'

import { CardRow } from '../surfaces/CardRow'
import { SimpleCard } from '../surfaces/SimpleCard'
import { A } from '../typography/A'
import { H3 } from '../typography/H3'
import { P } from '../typography/P'

type TreatmentBoxProps = {
  treatments: {
    id: string
    title: string
    paragraphs: string[]
    image: string
    altText: string
    linkHref: string
    linkText: string
    bgPosition?: keyof typeof BgPositions
    bgColor: BgColors
  }[]
}

export const TreatmentBox = ({ treatments }: TreatmentBoxProps) => {
  const t = useTranslations()

  return (
    <CardRow>
      {treatments.map((treatment) => (
        <SimpleCard
          clickable
          rounded
          cardList
          key={treatment.id}
          bgColor={treatment.bgColor}
          bgPosition={treatment.bgPosition}
          content={
            <div className="flex h-full flex-col">
              <H3 white id={`treatment-title-${treatment.id}`}>
                {t(treatment.title)}
              </H3>
              <Image
                className="m-auto my-6"
                src={treatment.image}
                alt={t(treatment.altText)}
                height={125}
              />
              {treatment.paragraphs.map((paragraph, index) => (
                <P small white key={`${treatment.id}-${index}`}>
                  {t.rich(paragraph, {
                    strong: (chunks) => <strong>{chunks}</strong>
                  })}
                </P>
              ))}
              <A
                overlay
                className="mt-auto mr-auto"
                href={treatment.linkHref}
                white
                small
              >
                {t(treatment.linkText)}
              </A>
            </div>
          }
        />
      ))}
    </CardRow>
  )
}
