import H2 from '../typography/H2'
import P from '../typography/P'

type CardProps = {
  title: string
  paragraphs: string[]
  bgColor: string // TODO: Define and set specific color types
  image?: string // Optional image for desktop layout
}

const Card = ({ title, paragraphs, bgColor, image }: CardProps) => {
  return (
    <div className={`p-6 ${bgColor} relative`}>
      {/* Pseudo-element for background image */}
      <div className="absolute inset-0 z-0 bg-card-pattern bg-200 opacity-5" />

      <H2>{title}</H2>

      <div className="columns-1 gap-4 lg:columns-3">
        {/* Image column, only shown if an image is provided */}
        {image && (
          <div className="sm:col-span-1">
            <img
              src={image}
              alt="Card Image"
              className="h-auto w-full rounded-lg"
            />
          </div>
        )}
        {paragraphs.map((paragraph, idx) => (
          <P key={`${paragraph}-${idx}`}>{paragraph}</P>
        ))}
      </div>
    </div>
  )
}

export default Card
