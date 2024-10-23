'use client'

import Link from 'next/link'
import { useState } from 'react'

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative z-50 flex items-center">
      <button
        onClick={toggleMenu}
        className="ml-6 flex h-[36px] w-[59px] items-start justify-between bg-transparent focus:outline-none" // Öka avståndet med ml-6
        aria-label="Öppna/stäng meny"
      >
        <span className="text-[26px] text-black">{isOpen ? 'X' : '☰'}</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-[56px] right-0 z-50 flex h-[531px] w-[314px] flex-col rounded-[16px_0px_0px_0px] bg-[#EAE6E3] p-[10px] opacity-100 transition-opacity duration-300">
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
