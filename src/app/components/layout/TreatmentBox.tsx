import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CardRow } from '../surfaces/CardRow'
import { H3 } from '../typography/H3'
import { BgColors, BgPositions } from '@/app/types'
import { SimpleCard } from '../surfaces/SimpleCard'
import { A } from '../typography/A'
import { P } from '../typography/P'

type TreatmentBoxProps = {
  treatments: {
    id: string
    title: string
    paragraphs: string[]
    image: string
    linkHref: string
    ariaLabel: string
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
              <H3 white>{t(treatment.title)}</H3>
              <Image
                className="m-auto my-6"
                src={treatment.image}
                alt={''}
                height={125}
                aria-hidden={true}
              />
              {treatment.paragraphs.map((paragraph, index) => (
                <P small white key={`${treatment.id}-${index}`}>
                  {t(paragraph)}
                </P>
              ))}
              <A
                overlay
                className="mt-auto"
                href={treatment.linkHref}
                aria-label={t(treatment.ariaLabel)}
                white
                small
              >
                {t('common.readMore')}
              </A>
            </div>
          }
        />
      ))}
    </CardRow>
  )
}
