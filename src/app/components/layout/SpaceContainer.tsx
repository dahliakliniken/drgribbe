type SpaceContainerProps = {
  centered?: boolean
  noPadding?: boolean
  spaceVertically?: boolean
  spaceTop?: boolean
  children: React.ReactNode
}

export const SpaceContainer = ({
  noPadding,
  spaceVertically,
  spaceTop,
  children
}: SpaceContainerProps) => {
  return (
    <div
      className={`w-full ${!noPadding && 'px-gapSpace'} ${spaceVertically && 'pb-gapSpace pt-gapSpaceL'} ${spaceTop && 'pt-gapSpaceL'}`}
    >
      {children}
    </div>
  )
}
