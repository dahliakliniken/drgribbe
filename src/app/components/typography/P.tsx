import classNames from 'classnames'

type PProps = {
  children: React.ReactNode
  small?: boolean
  className?: string
  white?: boolean
}

export const P = ({ children, small, className, white }: PProps) => {
  return (
    <p
      className={classNames(
        'font-josefin-sans',
        small ? 'text-base' : 'text-lg',
        'leading-tight font-light tracking-[0.06em]',
        white ? 'text-white' : 'text-black',
        className
      )}
    >
      {children}
    </p>
  )
}
