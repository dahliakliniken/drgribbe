export enum BgColors {
  Coral = 'bg-coral',
  White = 'bg-white',
  Green = 'bg-green',
  Grey = 'bg-grey',
  Beige = 'bg-beige'
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

export enum Paths {
  BROSTFORMINSKNING = 'brostforminskning',
  BROSTFORSTORING = 'brostforstoring',
  BROSTLYFT = 'brostlyft',
  BROSTOPERATIONER = 'brostoperationer',
  FORE_OCH_EFTER = 'fore-och-efter',
  FRAGOR_OCH_SVAR = 'fragor-och-svar',
  GARANTI = 'garanti',
  KONTAKT_OCH_BESOK = 'kontakt-och-besok',
  HUD_OCH_INJEKTIONER = 'hud-och-injektioner',
  IMPLANTATEN = 'implantaten',
  PRISER = 'priser',
  VAR_PERSONAL = 'var-personal'
}
