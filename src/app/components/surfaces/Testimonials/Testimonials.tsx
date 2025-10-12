import { Testimonial } from '@/components/surfaces/Testimonials/Testimonial'
import { testimonials } from '@/data/testimonialdata'

const getRandomTestimonials = (count: number) => {
  const shuffled = [...testimonials]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled.slice(0, count)
}

export default function Testimonials() {
  const randomTestimonials = getRandomTestimonials(3)

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1)

  const totalReviews = testimonials.length

  return (
    <section
      className="m-auto xl:max-w-7xl"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      <h2 id="testimonials-heading" className="sr-only">
        {'Patientrecensioner och omdömen'}
      </h2>

      <div
        itemProp="aggregateRating"
        itemScope
        itemType="https://schema.org/AggregateRating"
        className="sr-only"
      >
        <span itemProp="ratingValue">{averageRating}</span>
        <span itemProp="bestRating">{'5'}</span>
        <span itemProp="reviewCount">{totalReviews}</span>
      </div>
      <div className="m-auto xl:max-w-7xl">
        <div className="px-gapSpace flex space-x-3 overflow-x-auto xl:grid xl:grid-cols-3 xl:items-stretch">
          {randomTestimonials.map((testimonial) => (
            <Testimonial
              key={`${testimonial.title}-${testimonial.date}-${testimonial.content.slice(0, 20)}`}
              title={testimonial.title}
              content={testimonial.content}
              link={testimonial.link}
              date={testimonial.date}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
