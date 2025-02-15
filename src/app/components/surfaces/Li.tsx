import classNames from 'classnames'

export const Li = ({
  small,
  children
}: {
  small?: boolean
  children: React.ReactNode
}) => {
  return (
    <li className={classNames({ 'text-base': small, 'text-lg': !small })}>
      {children}
    </li>
  )
}
