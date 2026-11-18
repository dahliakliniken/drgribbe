import classNames from 'classnames'
import { Info, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type InformationBannerProps = {
  title: string
  children: ReactNode
  email?: string
  className?: string
  icon?: LucideIcon
}

export const InformationBanner = ({
  title,
  children,
  email,
  className,
  icon: Icon = Info
}: InformationBannerProps) => {
  return (
    <aside
      aria-label="Viktig information"
      className={classNames(
        'border-gold/40 bg-lightBeige text-green absolute top-0 right-0 left-0 z-40 border-b px-gapSpace py-3 text-center text-sm leading-snug tracking-[0.04em] lg:text-base [&_p]:mb-0!',
        className
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-3 lg:gap-y-1">
        <div className="inline-flex items-baseline justify-center gap-2">
          <Icon
            className="size-4 shrink-0 text-gold"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <p className="font-josefin-sans leading-none font-normal">{title}</p>
        </div>

        <p className="m-0 max-w-prose font-josefin-sans font-light lg:max-w-none lg:shrink">
          {children}
        </p>

        {email && (
          <p className="m-0 max-w-prose font-josefin-sans font-light lg:max-w-none lg:shrink">
            {'Mejla till '}
            <a
              href={`mailto:${email}`}
              className="font-josefin-san m-0 shrink-0 font-light underline decoration-gold/60 underline-offset-2 transition-colors duration-300 hover:text-gold"
            >
              {email}
            </a>
          </p>
        )}
      </div>
    </aside>
  )
}
