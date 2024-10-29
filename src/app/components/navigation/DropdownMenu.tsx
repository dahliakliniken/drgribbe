import Link from 'next/link'
import { useState } from 'react'
import Close from '../../../../public/images/close.svg'
import Menu from '../../../../public/images/menu.svg'
import Image from 'next/image'

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative z-50 flex items-center">
      <button
        onClick={toggleMenu}
        className="mr-gapSpace bg-transparent focus:outline-none"
        aria-label="Öppna/stäng meny"
      >
        <Image src={isOpen ? Close : Menu} alt="Stäng menyn" />
      </button>

      {isOpen && (
        <div className="absolute bottom-[50px] right-0 z-50 flex w-[314px] flex-col rounded-[16px_0px_0px_0px] bg-[#EAE6E3] p-[10px] opacity-100 transition-opacity duration-300">
          <ul className="flex w-full flex-col gap-[50px] pt-[80px]">
            {[
              'Kliniken',
              'Bröstoperationer',
              'Implantaten',
              'Hud och injektioner',
              'Pris'
            ].map((item) => (
              <li key={item} className="text-left">
                <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
