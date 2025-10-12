import { memo,useMemo } from 'react'

import { P } from '@/app/components/typography/P'
import { ephesis } from '@/app/fonts'
import { formatRelativeTime } from '@/utils/formatRelativeTime'

type TestimonialProps = {
  content: string
  title: string
  link: string
  date: string
  rating: number
}

export const Testimonial = memo(
  ({ content, title, link, date, rating }: TestimonialProps) => {
    const relativeTime = useMemo(() => formatRelativeTime(date), [date])

    return (
      <article
        className={`testimonial flex w-[90%] flex-col sm:w-[60%] md:w-[40%] xl:w-auto before:${ephesis.className}`}
        itemScope
        itemType="https://schema.org/Review"
      >
        <meta
          itemProp="itemReviewed"
          itemScope
          itemType="https://schema.org/MedicalBusiness"
        />
        <meta itemProp="name" content="Dalia Kliniken - Dr. Örjan Gribbe" />

        <meta itemProp="datePublished" content={date} />

        <div
          className="mb-6"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <cite
            className="text-gold font-josefin-sans block text-2xl font-normal"
            itemProp="name"
          >
            {title}
          </cite>
          <time dateTime={date} className="text-gold text-base">
            {relativeTime}
          </time>
        </div>

        <blockquote itemProp="reviewBody">
          <P className="leading-relaxed">{content}</P>
        </blockquote>

        <div
          itemProp="reviewRating"
          itemScope
          itemType="https://schema.org/Rating"
          className="sr-only"
        >
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="bestRating" content="5" />
        </div>

        <a
          className="text-gold font-josefin-sans mt-auto text-lg leading-tight font-light tracking-[0.06em] underline underline-offset-3 transition-colors duration-300 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Läs hela recensionen från ${title} på Google`}
        >
          {'Läs mer'}
        </a>
      </article>
    )
  }
)

Testimonial.displayName = 'Testimonial'
