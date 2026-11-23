'use client'

import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

import { P } from '@/app/components/typography/P'
import { getLastModified } from '@/utils/getLastModified'

export function LastUpdated() {
  const t = useTranslations('common')
  const pathname = usePathname() || '/'
  const isHomePage = pathname === '/'
  const isBookingPage = pathname === '/boka'
  const dateModified = getLastModified(pathname)

  if (isBookingPage) return null

  const formatted = dateModified
    ? new Intl.DateTimeFormat('sv-SE', {
        dateStyle: 'long'
      }).format(new Date(dateModified))
    : null

  return (
    <div
      className={classNames(
        'border-beige flex items-center justify-between gap-4 border-t p-4',
        { 'bg-beige': isHomePage }
      )}
    >
      {dateModified ? (
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
      ) : null}
    </div>
  )
}
