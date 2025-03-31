import classNames from 'classnames'

type H2Props = {
  children: React.ReactNode
  id?: string
  white?: boolean
  upperCase?: boolean
  className?: string
}

export const H2 = ({ children, id, white, upperCase, className }: H2Props) => {
  return (
    <h2
      id={id}
      className={classNames(
        'text-3xl font-light',
        { uppercase: upperCase },
        white ? 'text-white' : 'text-black',
        'mb-4',
        className
      )}
    >
      {children}
    </h2>
  )
}
