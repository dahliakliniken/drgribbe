'use client'

import classNames from 'classnames'
import { useRef, useState } from 'react'

import { ChevronIcon } from '../icons/ChevronIcon'

type AccordionProps = {
  outLine?: boolean
  coral?: boolean
  items: {
    id: string
    title: string
    content: React.ReactNode
  }[]
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Accordion = ({
  items,
  coral,
  outLine,
  size = 'h3'
}: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const accordionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const HeadingTag = size

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  const handleFocus = (id: string) => {
    setOpenAccordion(id)
  }

  const handleBlur = (id: string) => {
    setTimeout(() => {
      if (
        accordionRefs.current[id] &&
        !accordionRefs.current[id]?.contains(document.activeElement)
      ) {
        setOpenAccordion(null)
      }
    }, 0)
  }

  const borderColor = coral
    ? 'border-coral'
    : outLine
      ? 'border-gold'
      : 'border-green'
  const color = coral ? 'coral' : outLine ? 'white' : 'green'
  const openAccordionColor = coral
    ? 'bg-[#c98f95]'
    : outLine
      ? 'bg-lightBeige'
      : 'bg-[#338067]'

  return (
    <div>
      {items.map(({ id, title, content }) => (
        <div key={id} className={`${borderColor} mb-2 rounded-lg border`}>
          <HeadingTag className="text-lg font-light">
            <button
              id={`accordion-${id}`}
              aria-expanded={openAccordion === id}
              aria-controls={`panel-${id}`}
              onClick={() => handleAccordionToggle(id)}
              className={classNames(
                'flex w-full items-center justify-between px-4 py-3 text-left transition-colors duration-300',
                {
                  [openAccordionColor]: openAccordion === id,
                  [`bg-${color}`]: openAccordion !== id,
                  'rounded-t-lg': openAccordion === id,
                  'rounded-lg': openAccordion !== id,
                  'hover:bg-lightBeige text-black': outLine,
                  'text-white hover:bg-opacity-80': !outLine
                }
              )}
            >
              <span className="font-medium">{title}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openAccordion === id ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronIcon />
              </span>
            </button>
          </HeadingTag>
          <div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`accordion-${id}`}
            className={`transition-max-height bg-lightBeige overflow-hidden rounded-b-lg duration-300 ease-in-out ${
              openAccordion === id ? 'max-h-[200vh]' : 'max-h-0'
            }`}
            ref={(el) => {
              accordionRefs.current[id] = el
            }}
            onFocus={() => handleFocus(id)}
            onBlur={() => handleBlur(id)}
          >
            <div className="p-4">{content}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
