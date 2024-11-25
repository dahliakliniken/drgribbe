import { useTranslations } from 'next-intl'
import Link from 'next/link'

type Procedure = {
  name: string
  price: string
  link?: string
}

type Item = {
  title: string
  price?: string
  procedures: Procedure[]
}

const PriceList = ({ items }: { items: Item[] }) => {
  const t = useTranslations()
  return (
    <ul className="max-w-xl divide-y divide-gray-300">
      {items.map(({ title, price, procedures }, index) => {
        const hasSubProcedures = procedures.length > 0

        console.log(procedures)

        return (
          <li
            key={index}
            className={`${hasSubProcedures ? 'py-4' : 'flex items-center justify-between py-4'}`}
          >
            <h2 className="text-lg font-semibold">{title}</h2>

            {/* Sub-Procedures (if any) */}
            {hasSubProcedures ? (
              <ul className="mt-2 space-y-4">
                {procedures.map(({ name, price, link }, idx) => (
                  <li key={idx} className="space-y-1">
                    {/* Name and Price in one row */}
                    <div className="flex justify-between">
                      <span>{name}</span>
                      <span className="whitespace-nowrap text-coral">
                        {price}
                      </span>
                    </div>
                    {/* Read More Link */}
                    {link && (
                      <div>
                        <Link
                          href={link}
                          className="text-sm underline underline-offset-2 hover:text-coral"
                        >
                          {t('prices.readMore')}
                        </Link>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              // Single Price (if no sub-procedures)
              <span className="whitespace-nowrap text-coral">{price}</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default PriceList
