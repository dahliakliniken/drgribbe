import classNames from 'classnames'

import { BgColors, BgPositions } from '@/app/types'

type CardProps = {
  content: React.ReactNode
  title?: React.ReactNode
  bgColor: BgColors
  bgPosition?: keyof typeof BgPositions
  fullWidth?: boolean
  className?: string
  rounded?: boolean
  id?: string
  clickable?: boolean
  cardList?: boolean
}

export const SimpleCard = ({
  content,
  title,
  bgColor,
  bgPosition,
  className,
  rounded,
  id,
  clickable,
  cardList
}: CardProps) => {
  const isWhite = bgColor === BgColors.White
  const isBeige = bgColor === BgColors.Beige

  const bgSizeClass = cardList
    ? 'before:[background-size:200%]'
    : 'lg:before:[background-size:110%] before:[background-size:200%]'

  const backgroundPositionVariants = {
    'left-top': 'before:bg-small-left-top lg:before:bg-large-left-top',
    'right-top': 'before:bg-small-right-top',
    center: 'before:bg-small-center',
    left: 'before:bg-small-left lg:before:bg-large-left',
    right: 'before:bg-small-right lg:before:bg-large-right',
    'bottom-right': 'before:bg-small-bottom-right',
    'bottom-left': 'before:bg-small-bottom-left'
  }

  return (
    <section
      id={id}
      className={classNames(
        'before:pointer-events-none before:-z-10',
        bgSizeClass,
        className,
        {
          [bgPosition ? backgroundPositionVariants[bgPosition] : '']:
            bgPosition,
          'rounded-md': rounded,
          'cursor-pointer': clickable
        },
        'z-0 px-6 py-8 before:bg-no-repeat',
        bgColor,
        'relative h-full before:absolute before:top-0 before:left-0 before:h-full before:w-full',
        {
          'before:bg-card-pattern-light before:opacity-40': isWhite,
          'before:bg-card-pattern before:opacity-40': isBeige,
          'before:bg-card-pattern before:opacity-5': !isWhite && !isBeige
        }
      )}
    >
      {title && title}

      {content && content}
    </section>
  )
}
