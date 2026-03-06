'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { P } from '@/app/components/typography/P'
import { getLastModified } from '@/utils/getLastModified'

export function LastUpdated() {
  const t = useTranslations('common')
  const pathname = usePathname() || '/'
  const isHomePage = pathname === '/'
  const dateModified = getLastModified(pathname)

  if (!dateModified) return null

  const formatted = new Intl.DateTimeFormat('sv-SE', {
    dateStyle: 'long'
  }).format(new Date(dateModified))

  return (
    <footer
      className={classNames(
        'border-beige mb-52 flex justify-end border-t p-4 lg:mb-0',
        { 'bg-beige': isHomePage }
      )}
    >
      <P className="text-sm">
        <span>{t('lastUpdatedLabel')}</span>{' '}
        <time
          dateTime={dateModified}
          itemProp="dateModified"
          title={dateModified}
        >
          {formatted}
        </time>
      </P>
    </footer>
  )
}
