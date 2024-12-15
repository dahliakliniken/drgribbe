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
      ...props
    },
    ref
  ) => {
    const baseClass =
      'font-josefin-sans text-base font-light leading-tight tracking-[0.06em]'
    const buttonClass = `rounded-xl ${inverted ? 'border-black text-black hover:border-slate-500 hover:text-slate-500' : 'border-white text-white hover:border-beige hover:text-beige'} bg-transparent ${small ? 'border-2 p-2 text-small' : 'border-4 px-16 py-5 text-lg'}`
    const linkClass = `hover:underline underline underline-offset-3 ${color}`
    const combinedClass = `${baseClass} ${className} ${buttonStyle ? buttonClass : linkClass}`

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
