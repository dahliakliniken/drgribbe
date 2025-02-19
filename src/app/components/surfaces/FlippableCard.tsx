'use client'
import { useState } from 'react'
import { H2 } from '../typography/H2'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import { P } from '../typography/P'
import { IterationCcw } from 'lucide-react'

export type Staff = {
  id: string
  name: string
  titles: string[]
  image?: StaticImageData
  description?: string
}

type StaffCardProps = {
  member: Staff
}

export const FlippableCard = ({ member }: StaffCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const t = useTranslations()

  const hasDescription = Boolean(member.description)

  const FlipButton = ({ ariaLabel }: { ariaLabel: string }) => (
    <button
      onClick={() => setIsFlipped(!isFlipped)}
      className="absolute bottom-2 right-2 p-2 text-white/80 transition-colors hover:text-white"
      aria-label={ariaLabel}
    >
      <IterationCcw className="h-6 w-6" aria-hidden="true" />
    </button>
  )

  return (
    <div className="card h-60 w-[320px] lg:w-[400px]">
      <div
        className={`content absolute h-full w-full shadow-lg transition-transform duration-700 ${isFlipped ? 'flipped' : ''}`}
      >
        <div className="front overflow-hidden px-6 py-8 before:pointer-events-none before:absolute before:inset-0 before:bg-card-pattern before:bg-200 before:bg-[120%_60%] before:bg-no-repeat before:opacity-5">
          <H2 white className="staffh2">
            {member.name}
          </H2>
          {member.image && (
            <Image
              src={member.image}
              alt={t('altText.staffImage', { name: member.name })}
              className="staffportrait w-1/2 rounded-full"
            />
          )}
          <ul className="staffh2">
            {member.titles.map((title, index) => (
              <li key={`${member.id}-${index}`}>
                <P small white>
                  {title}
                </P>
              </li>
            ))}
          </ul>
          {hasDescription && (
            <FlipButton
              ariaLabel={t('varPersonal.readMore', { name: member.name })}
            />
          )}
        </div>
        {hasDescription && (
          <div className="back px-6 py-8">
            <P small white>
              {member.description}
            </P>
            <FlipButton
              ariaLabel={t('varPersonal.readLess', { name: member.name })}
            />
          </div>
        )}
      </div>
    </div>
  )
}
