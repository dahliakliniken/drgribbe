type PillarProps = {
  noRightPadding?: boolean
  children: React.ReactNode
}

const Pillar = ({ noRightPadding, children }: PillarProps) => {
  return (
    <div
      className={`pl-4 md:pl-8 lg:pl-16 ${noRightPadding ? 'pr-0' : 'pr-4 md:pr-8 lg:pr-16'}`}
    >
      {children}
    </div>
  )
}

export default Pillar
