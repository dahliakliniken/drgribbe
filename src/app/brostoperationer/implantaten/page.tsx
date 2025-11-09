import { Metadata } from 'next'

import { canonicalUrl, ORG_ID, SITE_URL } from '@/app/config/site'
import { JsonLd } from '@/components/surfaces/JsonLd'

import Implantaten from './Implantaten'

export const metadata: Metadata = {
  title: 'Implantaten - Dahliakliniken',
  description:
    'Det finns många olika varianter av bröstimplantat och vid tillverkningen kan man variera materialet i implantatet, hur mycket man fyller implantatet, formen på implantatet och skalets ytstruktur.',
  openGraph: {
    title: 'Implantaten - Dahliakliniken',
    description:
      'Det finns många olika varianter av bröstimplantat och vid tillverkningen kan man variera materialet i implantatet, hur mycket man fyller implantatet, formen på implantatet och skalets ytstruktur.'
  },
  twitter: {
    title: 'Implantaten - Dahliakliniken',
    description:
      'Det finns många olika varianter av bröstimplantat och vid tillverkningen kan man variera materialet i implantatet, hur mycket man fyller implantatet, formen på implantatet och skalets ytstruktur.'
  }
}

export default async function Page() {
  const canonical = canonicalUrl('/brostoperationer/implantaten')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalDevice',
        '@id': `${canonical}#procedure`,
        url: canonical,
        name: 'Implantaten - Dahliakliniken',
        description:
          'Det finns många olika varianter av bröstimplantat och vid tillverkningen kan man variera materialet i implantatet, hur mycket man fyller implantatet, formen på implantatet och skalets ytstruktur.',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonical}#primaryimage`,
          url: `${SITE_URL}/_next/static/media/_N3A0080.87f32f0b.jpg`
        },
        mainEntityOfPage: { '@id': canonical }
      },
      {
        '@type': 'MedicalWebPage',
        '@id': canonical,
        url: canonical,
        name: 'Implantaten | Dahliakliniken',
        inLanguage: 'sv-SE',
        isPartOf: { '@id': `${SITE_URL}#website` },
        publisher: { '@id': ORG_ID },
        about: { '@id': `${canonical}#procedure` },
        breadcrumb: { '@id': `${canonical}#breadcrumb` },
        primaryImageOfPage: { '@id': `${canonical}#primaryimage` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonical}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Hem',
            item: `${SITE_URL}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Bröstoperationer',
            item: `${SITE_URL}/brostoperationer`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Implantaten',
            item: canonical
          }
        ]
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Implantaten />
    </>
  )
}
