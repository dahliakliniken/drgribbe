'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronIcon } from '../icons/ChevronIcon'
import { H3 } from '../typography/H3'

type AccordionProps = {
  id: string
  title: string
  children: React.ReactNode
}

export const Accordion = ({ id, title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState<string | number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight)
    } else {
      setMaxHeight(0)
    }
  }, [isOpen])

  return (
    <div className="rounded-md border">
      <H3 className="text-lg">
        <button
          id={`${id}-header`}
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          onClick={handleToggle}
          className="flex w-full items-center justify-between bg-gray-100 p-4 text-left hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-coral"
        >
          <span className="font-medium">{title}</span>
          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          >
            <ChevronIcon />
          </span>
        </button>
      </H3>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-header`}
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${maxHeight}px` : '0',
          transition: 'max-height 0.3s ease'
        }}
        className="overflow-hidden"
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}
