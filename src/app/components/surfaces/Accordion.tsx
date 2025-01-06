'use client'

import { useRef, useState } from 'react'
import { ChevronIcon } from '../icons/ChevronIcon'
import { H3 } from '../typography/H3'

type AccordionProps = {
  coral?: boolean
  items: {
    id: string
    title: string
    content: React.ReactNode
  }[]
}

export const Accordion = ({ items, coral }: AccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const accordionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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

  const color = coral ? 'coral' : 'green'
  const openAccordionColor = coral ? 'bg-[#c98f95]' : 'bg-[#338067]'
  const focusRingColor = coral ? 'focus:ring-coral' : 'focus:ring-green'

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
                openAccordion === id ? openAccordionColor : `bg-${color}`
              } rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 ${focusRingColor} focus:ring-offset-2`}
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
