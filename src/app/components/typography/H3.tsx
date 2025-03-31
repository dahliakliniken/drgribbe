import classNames from 'classnames'

type H3Props = {
  children: React.ReactNode
  white?: boolean
  className?: string
}

export const H3 = ({ children, white, className }: H3Props) => {
  return (
    <h3
      className={classNames(
        { 'text-white': white },
        'mb-4 text-2xl font-light',
        className
      )}
    >
      {children}
    </h3>
  )
}
