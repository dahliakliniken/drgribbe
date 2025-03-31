import classNames from 'classnames'

type SpaceContainerProps = {
  centered?: boolean
  noPadding?: boolean
  spaceVertically?: boolean
  spaceTop?: boolean
  id?: string
  children: React.ReactNode
}

export const SpaceContainer = ({
  noPadding,
  spaceVertically,
  spaceTop,
  id,
  children
}: SpaceContainerProps) => {
  return (
    <div
      id={id}
      className={classNames(
        'w-full',
        !noPadding && 'px-gapSpace',
        spaceVertically && 'pb-gapSpace pt-gapSpaceL',
        spaceTop && 'pt-gapSpaceL'
      )}
    >
      {children}
    </div>
  )
}
