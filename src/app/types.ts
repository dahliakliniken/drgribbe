export enum BgColors {
  Coral = 'bg-coral',
  White = 'bg-white',
  Green = 'bg-green'
}

export const BgPositions = {
  'left-top': 'left-top',
  'right-top': 'right-top',
  center: 'center',
  left: 'left',
  right: 'right',
  'bottom-right': 'bottom-right',
  'bottom-left': 'bottom-left'
} as const

export type BgPositions = (typeof BgPositions)[keyof typeof BgPositions]
