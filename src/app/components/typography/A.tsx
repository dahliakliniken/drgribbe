import Link from 'next/link'
import { forwardRef } from 'react'

type AProps = {
  children: React.ReactNode
  href: string
  className?: string
  color?: string
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
      color = 'text-white',
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
    const baseClass =
      'font-josefin-sans text-base font-light leading-tight tracking-[0.06em]'
    const buttonClass = `rounded-xl ${inverted ? 'border-black text-black hover:border-slate-500 hover:text-slate-500' : 'border-white text-white hover:border-beige hover:text-beige'} bg-transparent ${small ? 'border-2 p-2 text-small' : 'border-4 px-16 py-5 text-lg'}`
    const linkClass = `hover:underline underline underline-offset-3 ${color}`
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
