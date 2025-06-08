import Script from 'next/script'

type JsonLdProps = {
  data: object
  id?: string
}

export const JsonLd = ({ data, id = 'jsonld-schema' }: JsonLdProps) => (
  <Script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    strategy="afterInteractive"
  />
)
