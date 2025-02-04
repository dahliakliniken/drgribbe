import classNames from 'classnames'
import Link from 'next/link'
import { forwardRef } from 'react'

type AProps = {
  children: React.ReactNode
  href: string
  className?: string
  white?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  buttonStyle?: boolean
  inverted?: boolean
  small?: boolean
  overlay?: boolean
}

export const A = forwardRef<HTMLAnchorElement, AProps>(
  (
    {
      children,
      href,
      white,
      className,
      onClick,
      buttonStyle,
      inverted,
      small,
      overlay,
      ...props
    },
    ref
  ) => {
    const baseClass = classNames(
      'transition-colors duration-300 font-josefin-sans font-light leading-tight tracking-[0.06em]',
      {
        'text-base': small,
        'text-xl': !small
      }
    )
    const buttonClass = classNames('rounded-xl bg-transparent', {
      'border-black text-black hover:border-gold hover:text-gold': inverted,
      'border-white text-white hover:border-beige hover:text-beige': !inverted,
      'border-2 p-2': small,
      'border-4 px-16 py-5': !small
    })
    const linkClass = classNames(
      'hover:underline underline underline-offset-3',
      {
        'text-white': white,
        'text-black': !white
      }
    )
    const overlayClass =
      'after:content-[""] after:block after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0'
    const combinedClass = classNames(baseClass, className, {
      [buttonClass]: buttonStyle,
      [linkClass]: !buttonStyle,
      [overlayClass]: overlay
    })

    return (
      <Link
        href={href}
        className={combinedClass}
        ref={ref}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

A.displayName = 'A'
