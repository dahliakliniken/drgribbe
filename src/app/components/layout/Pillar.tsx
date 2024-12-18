export const Pillar = ({
  id,
  children
}: {
  id?: string
  children: React.ReactNode
}) => {
  return (
    <div className="mx-auto max-w-3xl py-8" id={id}>
      {children}
    </div>
  )
}
