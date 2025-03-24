'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { determineActiveLinkColor } from '@/utils/determineActiveLinkColor'

export const Breadcrumbs = () => {
  const t = useTranslations()
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)
  const separator = <span>{' / '}</span>
  const lastPartOfPath = pathNames[pathNames.length - 1]
  const activeLinkColor = determineActiveLinkColor(lastPartOfPath)
  const activeClass = `mx-2 ${activeLinkColor}`
  const listClasses = 'hover:underline hover:text-gold mx-2'

  /* Don't show breadcrumbs on the home page */
  if (paths === '/') {
    return null
  }

  return (
    <div className="px-gapSpace lg:bg-beige w-full">
      <nav className="py-2">
        <ul className="flex">
          <li className={listClasses}>
            <Link href={'/'}>{t('breadcrumbs.home')}</Link>
          </li>
          {pathNames.length > 0 && separator}
          {pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`
            const itemClasses =
              paths === href ? `${activeClass}` : `${listClasses}`
            const itemLink = link[0] + link.slice(1, link.length)

            return (
              <Fragment key={index}>
                <li className={itemClasses}>
                  {paths === href ? (
                    <span>{t(`breadcrumbs.${itemLink}`)}</span>
                  ) : (
                    <Link href={href}>{t(`breadcrumbs.${itemLink}`)}</Link>
                  )}
                </li>
                {pathNames.length !== index + 1 && separator}
              </Fragment>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
