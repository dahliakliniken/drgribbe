import Link from 'next/link'
import { useState } from 'react'
import Close from '../../../../public/images/close.svg'
import Menu from '../../../../public/images/menu.svg'
import Image from 'next/image'
import Button from '../inputs/Button'
import { useTranslations } from 'next-intl'

const DropdownMenu: React.FC = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const renderLinks = () => {
    const links = [
      t('dropdown.clinic'),
      t('dropdown.breastSurgeries'),
      t('dropdown.implants'),
      t('dropdown.skinInjections'),
      t('dropdown.ourStaff'),
      t('dropdown.price')
    ]

    return links.map((link) => (
      <li key={link} className="text-left">
        <Link
          href={`/${link.toLowerCase().replace(/ /g, '-')}`}
          className="hover:underline"
        >
          {link}
        </Link>
      </li>
    ))
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
        <div className="pl-gapSpace absolute bottom-[50px] right-0 z-50 flex w-64 flex-col rounded-[16px_0px_0px_0px] bg-[#EAE6E3] p-[10px] pt-10 opacity-100 transition-opacity duration-300">
          <ul className="mb-gapSpace flex w-full flex-col gap-5">
            {renderLinks()}
          </ul>
          <Button inverted small text={t('common.bookFreeConsultation')} />
        </div>
      )}
    </div>
  )
}

export default DropdownMenu
