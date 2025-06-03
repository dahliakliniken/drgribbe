'use client'
import { useState } from 'react'
import { IterationCcw } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import classNames from 'classnames'

import { H2 } from '../typography/H2'
import { P } from '../typography/P'

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
      className={classNames(
        'absolute right-2 bottom-2 z-10 p-2',
        'text-white/80 hover:text-white',
        'group transition-colors duration-300'
      )}
      aria-label={ariaLabel}
    >
      <IterationCcw
        className={classNames(
          'h-6 w-6',
          'transition-transform duration-300 ease-in-out',
          'group-hover:rotate-[-180deg]'
        )}
        aria-hidden="true"
      />
    </button>
  )

  return (
    <div className="card h-60 w-[320px] lg:w-[400px]">
      <div
        className={classNames(
          'content absolute h-full w-full shadow-lg transition-transform duration-700',
          { flipped: isFlipped }
        )}
      >
        <div
          className={classNames(
            'front before:bg-card-pattern relative overflow-hidden px-6 py-8',
            'before:pointer-events-none before:absolute before:inset-0',
            'before:[background-size:200%] before:bg-[120%_60%] before:bg-no-repeat',
            'before:opacity-5'
          )}
        >
          <H2 white className="max-w-3/5">
            {member.name}
          </H2>
          {member.image && (
            <div className="absolute top-[-25px] right-[-25px] aspect-square w-1/2 overflow-hidden rounded-full">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={t('altText.staffImage', { name: member.name })}
                className={`h-full w-full object-cover`}
                fill
              />
            </div>
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
          <div className="back relative">
            <div className="h-full overflow-scroll px-6 py-8">
              <P small white>
                {member.description}
              </P>
            </div>
            <FlipButton
              ariaLabel={t('varPersonal.readLess', { name: member.name })}
            />
          </div>
        )}
      </div>
    </div>
  )
}
