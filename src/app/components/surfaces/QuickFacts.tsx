import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { H2 } from '../typography/H2'
import { A } from '../typography/A'

/**
 * Represents a single fact item in the QuickFacts component
 * @property {LucideIcon} icon - The Lucide React icon to display next to the fact
 * @property {string} label - The label text for the fact (e.g., "Price", "Duration")
 * @property {string | ReactNode} value - The value of the fact, can be a string or a React node for complex content
 */
export type FactItem = {
  icon: LucideIcon
  label: string
  value: string | ReactNode
}

/**
 * Props for the QuickFacts component
 * @property {string} title - The title of the quick facts section
 * @property {FactItem[]} facts - An array of fact items to display
 * @property {string} [ctaText] - Optional text for the call-to-action button
 * @property {string} [ctaUrl] - Optional URL for the call-to-action button
 * @property {string} [className] - Optional additional CSS classes to apply to the component
 */
export type QuickFactsProps = {
  title: string
  facts: FactItem[]
  ctaText?: string
  ctaUrl?: string
  className?: string
}

/**
 * QuickFacts Component
 *
 * Each fact consists of an icon, label, and value.
 *
 * @example
 * ```tsx
 * import { Clock, Euro, Hospital } from 'lucide-react'
 *
 * <QuickFacts
 *   title="Quick Facts About Breast Reduction"
 *   facts={[
 *     { icon: Euro, label: "Price", value: "from 55,000 SEK" },
 *     { icon: Clock, label: "Duration", value: "1.5–2 hours" },
 *     { icon: Hospital, label: "Anesthesia", value: "General anesthesia" }
 *   ]}
 *   ctaText="BOOK CONSULTATION"
 *   ctaUrl="/booking"
 * />
 * ```
 */
export const QuickFacts = ({
  title,
  facts,
  ctaText,
  ctaUrl = '#',
  className = ''
}: QuickFactsProps) => {
  return (
    <section
      className={`mx-auto my-8 w-full max-w-3xl border border-gray-200 bg-white ${className}`}
      aria-labelledby="quick-facts-title"
    >
      <H2
        id="quick-facts-title"
        className="!mb-0 border-b border-gray-100 p-4 text-2xl"
      >
        {title}
      </H2>

      <dl className="space-y-4 p-4">
        {facts.map((fact) => {
          const Icon = fact.icon
          return (
            <div key={fact.label} className="mb-3 flex items-start gap-2">
              <Icon
                className="text-green mt-0.5 h-5 w-5 flex-shrink-0"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline">
                <dt className="mr-2">{fact.label}:</dt>
                <dd className="font-light">
                  {typeof fact.value === 'string' ? fact.value : fact.value}
                </dd>
              </div>
            </div>
          )
        })}
      </dl>

      {ctaText && (
        <div className="p-4 pt-2">
          <A
            inverted
            small
            href={ctaUrl}
            buttonStyle
            className="inline-block rounded-md"
          >
            {ctaText}
          </A>
        </div>
      )}
    </section>
  )
}
