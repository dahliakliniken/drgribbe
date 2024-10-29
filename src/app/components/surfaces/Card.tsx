import P from '../typography/P'

type CardProps = {
  title: React.ReactNode
  paragraphs: string[]
  bgColor: string // TODO: Define and set specific color types
  image?: React.ReactNode
  style?: React.CSSProperties
  oneColumn?: boolean
  fullWidth?: boolean
  bgRight?: boolean
  bgLeft?: boolean
  bgCenter?: boolean
  imageHeight?: number
}

const Card = ({
  title,
  paragraphs,
  bgColor,
  image,
  oneColumn,
  bgRight,
  bgLeft
}: CardProps) => {
  return (
    <div className={`px-6 py-8 ${bgColor} relative h-full`}>
      {/* Pseudo-element for background image */}
      <div
        className={`${bgLeft && 'bg-left-top'} ${bgRight && 'bg-right-top'} absolute inset-0 z-0 bg-card-pattern bg-200 bg-no-repeat opacity-5`}
      />

      {title && title}

      <div
        className={`columns-1 gap-4 ${oneColumn ? 'columns-1' : 'lg:columns-3'}`}
      >
        {/* Image column, only shown if an image is provided */}
        {image && <div className="mb-2 text-center">{image}</div>}
        {paragraphs.map((paragraph, idx) => (
          <P key={`${paragraph}-${idx}`} color="text-white">
            {paragraph}
          </P>
        ))}
      </div>
    </div>
  )
}

export default Card
