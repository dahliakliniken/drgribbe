import { useTranslations } from 'next-intl'
import { memo, useMemo } from 'react'

import { StarRating } from '@/app/components/surfaces/Testimonials/StarRating'
import { ephesis } from '@/app/fonts'
import { P } from '@/components/typography/P'
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
    const t = useTranslations('common')
    const relativeTime = useMemo(() => formatRelativeTime(date), [date])

    return (
      <article
        className={`testimonial w-80 flex-shrink-0 before:${ephesis.className} flex flex-col p-2 text-center`}
      >
        <div>
          <cite className="block font-josefin-sans text-2xl font-normal text-gold">
            {title}
          </cite>
          <time dateTime={date} className="text-base text-gold">
            {relativeTime}
          </time>
        </div>

        <StarRating rating={rating} />

        <blockquote>
          <P className="leading-relaxed">{content}</P>
        </blockquote>

        <a
          className="mt-auto pt-2 font-josefin-sans text-lg leading-tight font-light tracking-[0.06em] text-gold underline underline-offset-3 transition-colors duration-300 hover:underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer nofollow ugc"
          aria-label={t('testimonials.readFullReviewAria', { title })}
        >
          {t('readMore')}
        </a>
      </article>
    )
  }
)

Testimonial.displayName = 'Testimonial'
