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

  return (
    <div
      className="w-full overflow-x-auto overflow-y-hidden"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
      <div className="flex min-w-min justify-center gap-4 lg:min-w-0">
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
  )
}
