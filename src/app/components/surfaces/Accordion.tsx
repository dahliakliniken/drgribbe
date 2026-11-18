'use client'

import classNames from 'classnames'
import { useId, useState } from 'react'

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
  const accordionId = useId()
  const HeadingTag = size

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
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
              type="button"
              id={`${accordionId}-trigger-${id}`}
              aria-expanded={openAccordion === id}
              aria-controls={`${accordionId}-panel-${id}`}
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
          <section
            id={`${accordionId}-panel-${id}`}
            aria-labelledby={`${accordionId}-trigger-${id}`}
            inert={openAccordion !== id}
            className={`transition-max-height overflow-hidden rounded-b-lg bg-lightBeige duration-300 ease-in-out ${
              openAccordion === id ? 'max-h-[200vh]' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              {
                typeof content === 'string'
                  ? content
                      .split('\n')
                      .map((line, index) => <p key={index}>{line}</p>)
                  : content // If it's already a React element, render it directly
              }
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}
