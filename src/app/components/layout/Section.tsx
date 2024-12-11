type SectionProps = {
  id?: string
  children: React.ReactNode
}

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="mb-8">
      {children}
    </section>
  )
}
