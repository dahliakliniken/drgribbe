import classNames from 'classnames'

type SpaceContainerProps = {
  as?: 'section' | 'article' | 'div'
  centered?: boolean
  noPadding?: boolean
  spaceVertically?: boolean
  spaceTop?: boolean
  id?: string
  children: React.ReactNode
}

export const SpaceContainer = ({
  as: Component = 'div',
  noPadding,
  spaceVertically,
  spaceTop,
  id,
  children
}: SpaceContainerProps) => {
  return (
    <Component
      id={id}
      className={classNames(
        'w-full',
        !noPadding && 'px-gapSpace',
        spaceVertically && 'pb-gapSpace pt-gapSpaceL',
        spaceTop && 'pt-gapSpaceL'
      )}
    >
      {children}
    </Component>
  )
}
