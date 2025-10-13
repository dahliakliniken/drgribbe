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
    <div
      className="w-full overflow-x-auto overflow-y-hidden"
      itemScope
      itemType="https://schema.org/MedicalBusiness"
    >
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
    // <section
    //   aria-labelledby="testimonials-heading"
    //   itemScope
    //   itemType="https://schema.org/MedicalBusiness"
    //   className="overflow-x-auto"
    // >
    //   <h2 id="testimonials-heading" className="sr-only">
    //     {'Patientrecensioner och omdömen'}
    //   </h2>

    //   <div
    //     itemProp="aggregateRating"
    //     itemScope
    //     itemType="https://schema.org/AggregateRating"
    //     className="sr-only"
    //   >
    //     <span itemProp="ratingValue">{averageRating}</span>
    //     <span itemProp="bestRating">{'5'}</span>
    //     <span itemProp="reviewCount">{totalReviews}</span>
    //   </div>

    //   {/* Wrapper to control max-width and centering like Pillar */}
    //   <div className="mx-auto grid max-w-3xl min-w-[960px] grid-cols-3 gap-6 lg:max-w-4xl">
    //     {randomTestimonials.map((testimonial) => (
    //       <Testimonial
    //         key={`${testimonial.title}-${testimonial.date}-${testimonial.content.slice(0, 20)}`}
    //         title={testimonial.title}
    //         content={testimonial.content}
    //         link={testimonial.link}
    //         date={testimonial.date}
    //         rating={testimonial.rating}
    //       />
    //     ))}
    //   </div>
    // </section>
  )
}
