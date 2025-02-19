export const Pillar = ({
  id,
  noPadding,
  children
}: {
  id?: string
  noPadding?: boolean
  children: React.ReactNode
}) => {
  return (
    <div className={`mx-auto max-w-3xl lg:max-w-4xl ${noPadding ? '' : 'py-8'}`} id={id}>
      {children}
    </div>
  )
}
