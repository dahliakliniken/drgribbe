import { BgColors, BgPositions } from '@/app/types'

type CardProps = {
  content: React.ReactNode
  title?: React.ReactNode
  bgColor: BgColors
  bgPosition?: keyof typeof BgPositions
  fullWidth?: boolean
  className?: string
  id?: string
}

export const SimpleCard = ({
  content,
  title,
  bgColor,
  bgPosition,
  className,
  id
}: CardProps) => {
  const isWhite = bgColor === BgColors.White
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
      id={id}
      className={`${className} z-0 px-6 py-8 before:-z-10 before:bg-200 before:lg:bg-110 ${bgColor} relative h-full before:absolute before:left-0 before:top-0 before:h-full before:w-full ${isWhite ? 'before:bg-card-pattern-light before:opacity-40' : 'before:bg-card-pattern before:opacity-5'} before:bg-no-repeat ${bgPosition ? backgroundPositionVariants[bgPosition] : ''}`}
    >
      {title && title}

      {content && content}
    </div>
  )
}
