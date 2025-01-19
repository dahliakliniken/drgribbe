import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ButtonWithIcon } from '../inputs/ButtonWithIcon'
import { ChevronIcon } from '../icons/ChevronIcon'
import { A } from '../typography/A'
import { HamburgerButton } from '../inputs/HamburgerButton'
import cn from 'classnames'

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
      document.body.classList.add('lg:overflow-hidden')
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.classList.remove('lg:overflow-hidden')
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.classList.remove('lg:overflow-hidden')
    }
  }, [isOpen])

  const renderLinks = () => {
    const links = [
      {
        text: t('dropdown.clinic'),
        href: '/#om-kliniken',
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
      },
      {
        text: t('dropdown.faq'),
        href: '/fragor-och-svar',
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
      <HamburgerButton
        onClick={toggleMenu}
        ref={buttonRef}
        label={isOpen ? t('common.close') : t('common.open')}
        aria-haspopup="true"
        aria-expanded={isOpen}
        isOpen={isOpen}
      />

      <div
        className={cn(
          'absolute -right-gapSpace bottom-[60px] z-50 flex w-64 flex-col rounded-[16px_0px_0px_0px] bg-custom-gradient p-4 pl-gapSpace pt-4 before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-card-pattern before:bg-500 before:bg-[20%_20%] before:opacity-20 lg:fixed lg:inset-0 lg:bottom-0 lg:top-20 lg:flex lg:w-full lg:flex-row lg:rounded-none lg:bg-white lg:bg-none lg:p-0 lg:before:bg-none',
          {
            'lg:animate-fade-in-right animate-fade-in-bottom pointer-events-auto':
              isOpen,
            'lg:animate-fade-out-right animate-fade-out-bottom pointer-events-none':
              !isOpen
          }
        )}
        aria-hidden={!isOpen}
      >
        <div className="lg:bg-custom-dark hidden lg:flex lg:w-2/3">
          <div className="flex flex-col p-gapSpace text-white">
            <span>{t('contact.contactUs')}</span>
            <span>
              {t.rich('contact.email', {
                email: (chunks) => (
                  <a href="mailto:info@dahliakliniken.se">{chunks}</a>
                )
              })}
            </span>
            <span>{t('contact.phone')}</span>
          </div>
        </div>

        <ButtonWithIcon
          className="self-end lg:hidden"
          onClick={() => setIsOpen(false)}
          icon={<ChevronIcon />}
          label={t('common.close')}
        />
        <div className="lg:relative lg:flex-1 lg:bg-custom-gradient lg:before:pointer-events-none lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:h-full lg:before:w-full lg:before:bg-card-pattern lg:before:bg-200 lg:before:bg-[20%_20%] lg:before:opacity-20">
          <ul className="mb-gapSpace flex w-full flex-col gap-5 lg:m-gapSpace">
            {renderLinks()}
          </ul>
          <A
            inverted
            small
            href="/boka"
            buttonStyle
            className="text-center lg:m-gapSpace"
            onClick={() => setIsOpen(false)}
          >
            {t('common.bookConsultation')}
          </A>
        </div>
      </div>
    </div>
  )
}
