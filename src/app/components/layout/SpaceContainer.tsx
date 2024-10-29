type SpaceContainerProps = {
  centered?: boolean
  noPadding?: boolean
  spaceVertically?: boolean
  children: React.ReactNode
}

const SpaceContainer = ({
  noPadding,
  spaceVertically,
  children
}: SpaceContainerProps) => {
  return (
    <div
      className={`w-full ${!noPadding && 'px-gapSpace'} ${spaceVertically && 'pb-gapSpace pt-gapSpaceL'}`}
    >
      {children}
    </div>
  )
}

export default SpaceContainer
