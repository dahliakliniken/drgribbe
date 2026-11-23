import { DropdownMenu } from '../navigation/DropdownMenu'
import { Logo } from '../navigation/Logo'

export const HeaderWithFooter = () => {
  return (
    <header className="fixed right-0 bottom-0 left-0 z-50 h-20 w-full bg-beige lg:top-0">
      <div className="flex items-center p-gapSpace md:p-4">
        <Logo />
        <DropdownMenu />
      </div>
    </header>
  )
}
