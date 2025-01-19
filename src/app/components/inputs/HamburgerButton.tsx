import classNames from 'classnames'
import { forwardRef } from 'react'
type HamburgerButtonProps = {
  label: string // Accessibility label
  onClick: () => void
  isOpen: boolean
}

export const HamburgerButton = forwardRef<
  HTMLButtonElement,
  HamburgerButtonProps
>(({ label, onClick, isOpen }, ref) => (
  <button
    className="relative h-10 w-10"
    ref={ref}
    onClick={onClick}
    aria-label={label}
  >
    <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
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
))

HamburgerButton.displayName = 'HamburgerButton'
