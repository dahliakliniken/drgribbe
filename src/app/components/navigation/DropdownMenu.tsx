import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../inputs/Button'
import { useTranslations } from 'next-intl'
import { ButtonWithIcon } from '../inputs/ButtonWithIcon'
import { CloseIcon } from '../icons/CloseIcon'
import { MenuIcon } from '../icons/MenuIcon'
import { ChevronIcon } from '../icons/ChevronIcon'

export const DropdownMenu: React.FC = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      buttonRef.current?.focus()
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const renderLinks = () => {
    const links = [
      {
        text: t('dropdown.clinic'),
        href: '/',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.breastSurgeries'),
        href: '/brostoperationer',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.implants'),
        href: '/brostoperationer/implantaten',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.skinInjections'),
        href: '/hud-och-injektioner',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.ourStaff'),
        href: '/var-personal',
        id: crypto.randomUUID()
      },
      {
        text: t('dropdown.price'),
        href: '/priser',
        id: crypto.randomUUID()
      }
    ]

    return links.map(({ text, href, id }) => (
      <li key={id}>
        <Link
          href={href}
          className="hover:underline"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
        >
          {text}
        </Link>
      </li>
    ))
  }

  return (
    <div className="relative z-50 flex items-center" ref={menuRef}>
      <ButtonWithIcon
        ref={buttonRef}
        onClick={toggleMenu}
        icon={isOpen ? <CloseIcon /> : <MenuIcon />}
        label={isOpen ? t('common.close') : t('common.open')}
        aria-haspopup="true"
        aria-expanded={isOpen}
      />

      <div
        className={`bg-custom-gradient absolute -right-gapSpace bottom-[60px] z-50 flex w-64 flex-col rounded-[16px_0px_0px_0px] p-[10px] pl-gapSpace pt-10 transition-all duration-300 before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-card-pattern before:bg-500 before:bg-[20%_20%] before:opacity-20 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <ButtonWithIcon
          className="-translate-y-4 self-end"
          onClick={() => setIsOpen(false)}
          icon={<ChevronIcon />}
          label={t('common.close')}
        />
        <ul className="mb-gapSpace flex w-full flex-col gap-5">
          {renderLinks()}
        </ul>
        <Button inverted small text={t('common.bookFreeConsultation')} />
      </div>
    </div>
  )
}
