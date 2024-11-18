type CardProps = {
  content: React.ReactNode
  title: React.ReactNode
  bgColor: string // TODO: Define and set specific color types
  fullWidth?: boolean
  bgRight?: boolean
  bgLeft?: boolean
  bgCenter?: boolean
}

export const CardCustom = ({
  content,
  title,
  bgColor,
  bgRight,
  bgLeft
}: CardProps) => {
  return (
    <div
      className={`z-0 before:-z-10 before:lg:bg-110 before:lg:bg-[500%_50%] ${bgLeft && 'before:bg-left-top'} ${bgRight && 'before:bg-[100%_50%]'} px-6 py-8 before:bg-200 ${bgColor} relative h-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-card-pattern before:bg-no-repeat before:opacity-5`}
    >
      {title && title}

      {content && content}
    </div>
  )
}
