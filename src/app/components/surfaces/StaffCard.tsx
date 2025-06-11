'use client'
import classNames from 'classnames'
import { ChevronDown } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { BgColors } from '@/app/types'

import { Pillar } from '../layout/Pillar'
import { H2 } from '../typography/H2'
import { P } from '../typography/P'
import { Card } from './Card'

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

export const StaffCard = ({ member }: StaffCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const t = useTranslations()

  const hasDescription = Boolean(member.description)

  return (
    <>
      <Card
        className="overflow-hidden"
        bgColor={BgColors.Coral}
        bgPosition="right"
        content={
          <Pillar>
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
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute right-2 bottom-2 p-2 text-white/80 transition-colors hover:text-white"
                aria-expanded={isExpanded}
                aria-label={
                  isExpanded
                    ? t('varPersonal.readLess', { name: member.name })
                    : t('varPersonal.readMore', { name: member.name })
                }
              >
                <ChevronDown
                  className={classNames(
                    'h-8 w-8 transition-transform duration-300',
                    { 'rotate-180': isExpanded }
                  )}
                />
              </button>
            )}
          </Pillar>
        }
      />
      {hasDescription && (
        <div
          className={classNames(
            'bg-coral absolute top-full right-0 left-0 z-50 mt-1 rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out',
            isExpanded
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-4 opacity-0'
          )}
        >
          <P small white>
            {member.description}
          </P>
        </div>
      )}
    </>
  )
}
