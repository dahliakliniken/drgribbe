import classNames from 'classnames'

type H3Props = {
  children: React.ReactNode
  white?: boolean
  className?: string
  id?: string
}

export const H3 = ({ children, white, className, id }: H3Props) => {
  return (
    <h3
      id={id}
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
