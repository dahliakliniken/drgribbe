import H2 from '../typography/H2'
import P from '../typography/P'

type CardProps = {
  title: string
  paragraphs: string[]
  bgColor: string // TODO: Define and set specific color types
  image?: string // Optional image for desktop layout
  style?: React.CSSProperties
}

const Card = ({ title, paragraphs, bgColor, image }: CardProps) => {
  return (
    <div
      className={`p-6 ${bgColor} relative flex h-[561px] w-[331px] flex-col items-center rounded-[5px_0_0_0]`}
    >
      {/* Pseudo-element for background image */}
      <div className="absolute inset-0 z-0 bg-card-pattern bg-200 opacity-5" />

      {/* H2 with white text */}
      <H2 color="text-white">{title}</H2>

      <div className="mt-2 flex flex-col items-center">
        {' '}
        
        {/* Image column, only shown if an image is provided */}
        {image && (
          <div className="mb-2">
            {' '}
            {/* Lägg till marginal under bilden */}
            <img
              src={image}
              alt="Card Image"
              className="h-[151px] w-[152px] rounded-lg opacity-100" // Specifik storlek för bilden
            />
          </div>
        )}
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
