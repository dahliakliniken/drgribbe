import classNames from 'classnames'

type H1Props = {
  children: React.ReactNode
  white?: boolean
  upperCase?: boolean
}

export const H1 = ({ children, white, upperCase }: H1Props) => {
  return (
    <h1
      className={classNames(
        'text-4xl font-light',
        { uppercase: upperCase },
        white ? 'text-white' : 'text-black',
        'mb-4'
      )}
    >
      {children}
    </h1>
  )
}
