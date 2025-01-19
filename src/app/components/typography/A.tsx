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
    const baseClass = `transition-colors duration-300 font-josefin-sans font-light leading-tight tracking-[0.06em] ${small ? 'text-base' : 'text-xl'}`
    const buttonClass = `rounded-xl ${inverted ? 'border-black text-black hover:border-gold hover:text-gold' : 'border-white text-white hover:border-beige hover:text-beige'} bg-transparent ${small ? 'border-2 p-2' : 'border-4 px-16 py-5'}`
    const linkClass = `hover:underline underline underline-offset-3 ${white ? 'text-white' : 'text-black'}`
    const overlayClass =
      'after:content-[""] after:block after:absolute after:top-0 after:left-0 after:bottom-0 after:right-0'
    const combinedClass = `${baseClass} ${className} ${buttonStyle ? buttonClass : linkClass} ${overlay ? overlayClass : ''}`

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
