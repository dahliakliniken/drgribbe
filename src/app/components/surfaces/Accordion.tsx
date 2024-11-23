'use client'

import { useState } from 'react'
import { ChevronIcon } from '../icons/ChevronIcon'
import { H3 } from '../typography/H3'
import { P } from '../typography/P'

type AccordionProps = {
  items: {
    id: string
    title: string
    content: string[]
  }[]
}

export const Accordion = ({ items }: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }

  return (
    <div>
      {items.map(({ id, title, content }) => (
        <div key={id} className="mb-2 rounded-md">
          <H3 className="text-lg">
            <button
              id={`accordion-${id}`}
              aria-expanded={openAccordion === id}
              aria-controls={`panel-${id}`}
              onClick={() => handleAccordionToggle(id)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-white transition-colors duration-300 ${
                openAccordion === id ? 'bg-[#196A49]' : 'bg-green'
              } rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green`}
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
          </H3>
          <div
            id={`panel-${id}`}
            role="region"
            aria-labelledby={`accordion-${id}`}
            className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
              openAccordion === id ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-4">
              {content.map((text, index) => {
                return (
                  <P key={`${id}-${index}`} small>
                    {text}
                  </P>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
