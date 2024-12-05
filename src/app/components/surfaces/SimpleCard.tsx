import { BgColors, BgPositions } from '@/app/types'
import { generateBgPositionClass } from '@/utils/generateBgPositionClass'

type CardProps = {
  content: React.ReactNode
  title?: React.ReactNode
  bgColor: BgColors
  bgPosition?: keyof typeof BgPositions
  fullWidth?: boolean
  className?: string
}

export const SimpleCard = ({
  content,
  title,
  bgColor,
  bgPosition,
  className
}: CardProps) => {
  const isWhite = bgColor === BgColors.White
  const bgPositionClass = generateBgPositionClass(bgPosition)

  return (
    <div
      className={`${className} z-0 px-6 py-8 before:-z-10 before:bg-200 before:lg:bg-110 ${bgColor} relative h-full before:absolute before:left-0 before:top-0 before:h-full before:w-full ${isWhite ? 'before:bg-card-pattern-light before:opacity-40' : 'before:bg-card-pattern before:opacity-5'} before:bg-no-repeat ${bgPositionClass}`}
    >
      {title && title}

      {content && content}
    </div>
  )
}
