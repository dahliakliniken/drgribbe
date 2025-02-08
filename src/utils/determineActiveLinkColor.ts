import { Paths } from '@/app/types'

const colorMapping: { [key in Paths]: string } = {
  [Paths.BROSTOPERATIONER]: 'text-green',
  [Paths.BROSTFORMINSKNING]: 'text-green',
  [Paths.BROSTFORSTORING]: 'text-green',
  [Paths.BROSTLYFT]: 'text-green',
  [Paths.FORE_OCH_EFTER]: 'text-green',
  [Paths.IMPLANTATEN]: 'text-green',
  [Paths.GARANTI]: 'text-green',
  [Paths.HUD_OCH_INJEKTIONER]: 'text-coral',
  [Paths.VAR_PERSONAL]: 'text-coral',
  [Paths.PRISER]: 'text-coral',
  [Paths.KONTAKT_OCH_BESOK]: 'text-coral',
  [Paths.FRAGOR_OCH_SVAR]: 'text-gold'
}

const isPathsKey = (key: string): key is Paths => {
  return Object.values(Paths).includes(key as Paths)
}

export const determineActiveLinkColor = (pathname: string): string => {
  if (isPathsKey(pathname)) {
    return colorMapping[pathname]
  }
  return 'text-green'
}
