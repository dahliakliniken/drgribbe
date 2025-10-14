import { memo, useMemo } from 'react'

import { ephesis } from '@/app/fonts'
import { P } from '@/components/typography/P'
import { BUSINESS_ADDRESS, BUSINESS_FULL_NAME } from '@/data/businessData'
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
        className={`testimonial w-80 flex-shrink-0 before:${ephesis.className} flex flex-col p-2 text-center`}
        itemScope
        itemType="https://schema.org/Review"
      >
        <div
          itemProp="itemReviewed"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <meta itemProp="name" content={BUSINESS_FULL_NAME} />
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <meta
              itemProp="streetAddress"
              content={BUSINESS_ADDRESS.streetAddress}
            />
            <meta
              itemProp="addressLocality"
              content={BUSINESS_ADDRESS.addressLocality}
            />
            <meta itemProp="postalCode" content={BUSINESS_ADDRESS.postalCode} />
            <meta
              itemProp="addressCountry"
              content={BUSINESS_ADDRESS.addressCountry}
            />
          </div>
        </div>

        <meta itemProp="datePublished" content={date} />

        <div
          itemProp="reviewRating"
          itemScope
          itemType="https://schema.org/Rating"
        >
          <meta itemProp="ratingValue" content={rating.toString()} />
          <meta itemProp="bestRating" content="5" />
        </div>

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

        <div itemProp="reviewBody">
          <P className="leading-relaxed">{content}</P>
        </div>

        <a
          className="text-gold font-josefin-sans mt-auto pt-2 text-lg leading-tight font-light tracking-[0.06em] underline underline-offset-3 transition-colors duration-300 hover:underline"
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
