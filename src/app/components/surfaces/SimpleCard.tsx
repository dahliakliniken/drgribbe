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

  const bgSizeClass = cardList
    ? 'before:bg-200'
    : 'before:lg:bg-110 before:bg-200'

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
      className={`before:pointer-events-none before:-z-10 ${bgSizeClass} ${className} ${bgPosition ? backgroundPositionVariants[bgPosition] : ''} ${rounded && 'rounded-md'} z-0 px-6 py-8 before:bg-no-repeat ${bgColor} relative h-full before:absolute before:left-0 before:top-0 before:h-full before:w-full ${isWhite ? 'before:bg-card-pattern-light before:opacity-40' : 'before:bg-card-pattern before:opacity-5'} ${clickable && 'cursor-pointer'}`}
    >
      {title && title}

      {content && content}
    </section>
  )
}
