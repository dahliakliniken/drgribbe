'use client'

import { useRef } from 'react'
import { A } from '../typography/A'
import { P } from '../typography/P'
import { BgColors, BgPositions } from '@/app/types'

type CardProps = {
  title?: React.ReactNode
  paragraphs: string[]
  bgColor: BgColors
  bgPosition?: keyof typeof BgPositions
  image?: React.ReactNode
  style?: React.CSSProperties
  oneColumn?: boolean
  twoColumns?: boolean
  threeColumns?: boolean
  smallText?: boolean
  rounded?: boolean
  linkHref?: string
  linkText?: string
  linkTextAriaLabel?: string
  clickable?: boolean
  cardList?: boolean
}

export const Card = ({
  title,
  paragraphs,
  bgColor,
  bgPosition,
  image,
  oneColumn,
  twoColumns,
  threeColumns,
  smallText = false,
  rounded = false,
  linkHref,
  linkText,
  linkTextAriaLabel,
  clickable,
  cardList
}: CardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null)

  const handleClick = () => {
    if (clickable && linkRef.current) {
      linkRef.current.click()
    }
  }

  const isWhiteBackground = bgColor === BgColors.White
  const bgSizeClass = cardList
    ? 'before:bg-200'
    : 'before:lg:bg-110 before:bg-200'

  const backgroundPositionVariants = {
    'left-top': 'before:bg-small-left-top',
    'right-top': 'before:bg-small-right-top',
    center: 'before:bg-small-center',
    left: 'before:bg-small-left lg:before:bg-large-left',
    right: 'before:bg-small-right lg:before:bg-large-right',
    'bottom-right': 'before:bg-small-bottom-right',
    'bottom-left': 'before:bg-small-bottom-left'
  }

  return (
    <div
      className={`${bgPosition ? backgroundPositionVariants[bgPosition] : ''} ${bgSizeClass} ${rounded && 'rounded-md'} z-0 px-6 py-8 before:bg-no-repeat ${bgColor} relative h-full before:absolute before:left-0 before:top-0 before:h-full before:w-full ${isWhiteBackground ? 'before:bg-card-pattern-light before:opacity-40' : 'before:bg-card-pattern before:opacity-5'} ${clickable && 'cursor-pointer'}`}
      onClick={handleClick}
    >
      {title && title}

      <div
        className={`columns-1 gap-4 ${oneColumn && 'columns-1'} ${twoColumns && 'lg:columns-2'} ${threeColumns && 'lg:columns-3'} relative z-10`}
      >
        {/* Image column, only shown if an image is provided */}
        {image && <div className="mb-2">{image}</div>}
        {paragraphs.map((paragraph, idx) => (
          <P
            key={`${paragraph}-${idx}`}
            white={!isWhiteBackground}
            small={smallText}
          >
            {paragraph}
          </P>
        ))}
        {linkText && linkHref && (
          <A ref={linkRef} href={linkHref} aria-label={linkTextAriaLabel} white>
            {linkText}
          </A>
        )}
      </div>
    </div>
  )
}
