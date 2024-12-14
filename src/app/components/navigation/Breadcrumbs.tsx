'use client'

import { Fragment } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { SpaceContainer } from '../layout/SpaceContainer'

export const Breadcrumbs = () => {
  const t = useTranslations()
  const paths = usePathname()
  const pathNames = paths.split('/').filter((path) => path)
  const separator = <span>{' / '}</span>
  const activeClass = 'text-coral mx-2 font-bold'
  const listClasses = 'hover:underline mx-2'

  /* Don't show breadcrumbs on the home page */
  if (paths === '/') {
    return null
  }

  return (
    <SpaceContainer>
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
    </SpaceContainer>
  )
}
