import classNames from 'classnames'
import { useTranslations } from 'next-intl'
import { forwardRef } from 'react'
type HamburgerButtonProps = {
  label: string // Accessibility label
  onClick: () => void
  isOpen: boolean
}

export const HamburgerButton = forwardRef<
  HTMLButtonElement,
  HamburgerButtonProps
>(({ label, onClick, isOpen }, ref) => {
  const t = useTranslations()
  return (
    <button
      className="flex items-center gap-2 pl-2"
      ref={ref}
      onClick={onClick}
      aria-label={label}
      aria-expanded={isOpen}
    >
      <span className="hidden uppercase lg:inline">{t('common.menu')}</span>
      <div className="relative h-10 w-10 translate-y-4 transform">
        <span
          aria-hidden="true"
          className={classNames(
            'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
            { 'rotate-45': isOpen, '-translate-y-1.5': !isOpen }
          )}
        ></span>
        <span
          aria-hidden="true"
          className={classNames(
            'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
            { 'opacity-0': isOpen }
          )}
        ></span>
        <span
          aria-hidden="true"
          className={classNames(
            'absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out',
            { '-rotate-45': isOpen, 'translate-y-1.5': !isOpen }
          )}
        ></span>
      </div>
    </button>
  )
})

HamburgerButton.displayName = 'HamburgerButton'
