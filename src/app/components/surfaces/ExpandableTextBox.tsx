'use client'

import classNames from 'classnames'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../inputs/Button'
import { H1 } from '../typography/H1'
import { H2 } from '../typography/H2'
import { H3 } from '../typography/H3'
import { P } from '../typography/P'

interface ExpandableTextBoxProps {
  title: string
  paragraphs: Array<string | React.ReactNode>
  headingSize: 'H1' | 'H2' | 'H3'
}

export const ExpandableTextBox = ({
  title,
  paragraphs,
  headingSize
}: ExpandableTextBoxProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const toggleExpand = () => {
    setIsExpanded((prev) => {
      if (prev) {
        titleRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
      return !prev
    })
  }

  const t = useTranslations()

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded
        ? `${contentRef.current.scrollHeight}px`
        : '0px'
    }
  }, [isExpanded])

  const initialParagraph = paragraphs[0]
  const restOfContent = paragraphs.slice(1).join('\n\n')

  const headingComponents = {
    H1,
    H2,
    H3
  }
  const HeadingTag = headingComponents[headingSize]

  return (
    <>
      <div ref={titleRef}>
        <HeadingTag>{title}</HeadingTag>
      </div>
      <P>{initialParagraph}</P>
      <div
        ref={contentRef}
        className={classNames(
          'transition-max-height overflow-hidden duration-500 ease-in-out',
          { 'max-h-0': !isExpanded }
        )}
        aria-hidden={!isExpanded}
      >
        {restOfContent.split('\n\n').map((paragraph, index) => (
          <P key={index}>{paragraph}</P>
        ))}
      </div>
      <Button
        textButton
        inverted
        ariaExpanded={isExpanded}
        ariaControls="expandable-content"
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            {t('common.readLess')}
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          </>
        ) : (
          <>
            {t('common.readMore')}
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </>
  )
}
