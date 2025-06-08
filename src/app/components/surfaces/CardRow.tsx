import { Children } from 'react'

type CardRowProps = {
  children: React.ReactNode
}

export const CardRow = ({ children }: CardRowProps) => {
  const childrenCount = Children.count(children)
  const gridColsClass =
    {
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4',
      5: 'xl:grid-cols-5',
      6: 'xl:grid-cols-6'
    }[childrenCount] || 'xl:grid-cols-4'

  return (
    <div
      className={`px-gapSpace flex space-x-4 overflow-x-auto xl:grid ${gridColsClass} xl:items-stretch`}
    >
      {Children.map(children, (child, index) => (
        <article
          key={index}
          className="w-[90%] flex-none sm:w-[60%] md:w-[40%] xl:w-auto"
        >
          {child}
        </article>
      ))}
    </div>
  )
}
