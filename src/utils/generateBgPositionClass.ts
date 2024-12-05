import { BgPositions } from '@/app/types'

export const generateBgPositionClass = (
  bgPosition?: keyof typeof BgPositions
) => {
  switch (bgPosition) {
    case 'left-top':
      return 'before:bg-small-left-top'
    case 'right-top':
      return 'before:bg-small-right-top'
    case 'center':
      return 'before:bg-small-center'
    case 'left':
      return 'before:bg-small-left lg:before:bg-large-left'
    case 'right':
      return 'before:bg-small-right lg:before:bg-large-right'
    case 'bottom-right':
      return 'before:bg-small-bottom-right'
    case 'bottom-left':
      return 'before:bg-small-bottom-left'
    default:
      return ''
  }
}
