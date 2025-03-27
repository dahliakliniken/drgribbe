import cn from 'classnames'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { useFocusTrap } from '@/hooks/useFocusTrap'

import { ChevronIcon } from '../icons/ChevronIcon'
import { ButtonWithIcon } from '../inputs/ButtonWithIcon'
import { HamburgerButton } from '../inputs/HamburgerButton'
import { A } from '../typography/A'
import { useLinksData } from './useLinksData'

type Link = { text: string; href: string; id: string }

type LinkProps = Array<Link & { subLinks?: Link[] }>

export const DropdownMenu: React.FC = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mainLinks] = useLinksData()

  useFocusTrap(isOpen, menuRef)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
    setActiveLink(null)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      buttonRef.current?.focus()
      document.body.classList.add('lg:overflow-hidden')
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('lg:overflow-hidden')
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('lg:overflow-hidden')
    }
  }, [isOpen])

  const handleClickOnMenuLink = (id: string, hasSubLinks: boolean) => {
    if (window.innerWidth >= 1024 && hasSubLinks) {
      setActiveLink((prev) => (prev === id ? null : id))
    } else {
      setIsOpen(false)
    }
  }

  const renderLinks = (links: LinkProps) => {
    return links.map(({ text, href, id, subLinks }) => {
      return (
        <li key={id} className="relative">
          <Link
            href={href}
            className={cn('hover:text-gold transition-colors duration-300', {
              'text-gold': activeLink === id,
              "lg:before:absolute lg:before:-top-px lg:before:-left-3 lg:before:content-['_«']":
                !!subLinks
            })}
            onClick={(e) => {
              if (window.innerWidth >= 1024 && subLinks) {
                e.preventDefault()
                handleClickOnMenuLink(id, !!subLinks)
              } else {
                handleClickOnMenuLink(id, !!subLinks)
              }
            }}
            tabIndex={isOpen ? 0 : -1}
          >
            {text}
          </Link>
          {subLinks && (
            <ul
              className={cn(
                'absolute top-0 hidden flex-col gap-5 font-normal text-white transition-all duration-300 ease-in-out lg:flex',
                {
                  'pointer-events-auto -translate-x-48 opacity-100':
                    activeLink === id
                },
                {
                  'pointer-events-none -translate-x-44 opacity-0':
                    activeLink !== id
                }
              )}
            >
              {subLinks.map(({ text, href, id: subLinkId }) => (
                <li key={subLinkId} className="relative font-light">
                  <Link
                    href={href}
                    className={'hover:text-gold transition-colors duration-300'}
                    tabIndex={activeLink === id ? 0 : -1}
                    onClick={() => setIsOpen(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    })
  }

  return (
    <div
      className="relative z-50 flex items-center gap-1 md:top-1 font-light"
      ref={menuRef}
    >
      <HamburgerButton
        onClick={toggleMenu}
        ref={buttonRef}
        label={isOpen ? t('common.closeMenu') : t('common.openMenu')}
        aria-haspopup="true"
        aria-expanded={isOpen}
        isOpen={isOpen}
      />

      <div
        className={cn(
          '-right-gapSpace bg-custom-gradient pl-gapSpace before:bg-card-pattern absolute bottom-[60px] z-50 flex w-64 flex-col rounded-[16px_0px_0px_0px] p-4 pt-4 transition-all duration-300 ease-in-out before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:[background-size:500%] before:bg-[20%_20%] before:opacity-20 lg:fixed lg:inset-0 lg:top-20 lg:bottom-0 lg:flex lg:w-full lg:flex-row lg:rounded-none lg:bg-white lg:bg-none lg:p-0 lg:duration-500 lg:before:bg-none',
          {
            'pointer-events-auto translate-y-0 opacity-100': isOpen,
            'pointer-events-none translate-y-2 opacity-0 lg:translate-y-0':
              !isOpen
          }
        )}
        aria-hidden={!isOpen}
      >
        <div className="lg:bg-custom-dark lg:before:bg-card-pattern hidden before:pointer-events-none lg:flex lg:w-2/3 lg:before:absolute lg:before:h-full lg:before:w-full lg:before:[background-size:110%] lg:before:bg-[20%_20%] lg:before:opacity-5">
          <div className="p-gapSpace flex flex-col text-white font-light">
            <span>{t('contact.contactUs')}</span>
            <span>
              {t.rich('contact.email', {
                email: (chunks) => (
                  <a href="mailto:info@dahliakliniken.se" tabIndex={isOpen ? 0 : -1}>
                    {chunks}
                  </a>
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
          label={t('common.closeMenu')}
        />
        <div className="lg:bg-custom-gradient-desktop lg:relative lg:flex-1">
          <ul className="mb-gapSpace lg:m-gapSpace lg:ml-gapSpaceL flex w-full flex-col gap-5 font-light">
            {renderLinks(mainLinks)}
          </ul>
          <A
            inverted
            small
            href="/boka"
            buttonStyle
            className="lg:m-gapSpace lg:ml-gapSpaceL rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            {t('common.bookConsultation')}
          </A>
        </div>
      </div>
    </div>
  )
}
