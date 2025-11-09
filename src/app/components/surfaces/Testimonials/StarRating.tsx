import { Star } from 'lucide-react'

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div
      aria-hidden="true"
      className="text-gold mt-2 mb-4 flex justify-center gap-1"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          size={14}
          className={`transition-opacity ${i < rating ? 'fill-current opacity-100' : 'opacity-30'} `}
        />
      ))}
    </div>
  )
}
