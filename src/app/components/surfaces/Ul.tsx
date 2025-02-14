import classNames from 'classnames'

export const Ul = ({
  className,
  white,
  children
}: {
  className?: string
  white?: boolean
  children: React.ReactNode
}) => {
  return (
    <ul
      className={classNames(
        'list-disc space-y-2 pl-5',
        {
          'text-white': white
        },
        className
      )}
    >
      {children}
    </ul>
  )
}
