import { Metadata } from 'next'

import { canonicalUrl,SITE_URL } from '@/app/config/site'
import { JsonLd } from '@/components/surfaces/JsonLd'

import Brostlyft from './Brostlyft'

export const metadata: Metadata = {
  title: 'Bröstlyft i Stockholm - Dahliakliniken',
  description:
    'Om brösthuden är lös och hänger kan den ofta fyllas ut med bröstimplantat på ett estetiskt vackert sätt. Här kan du läsa om hur ett bröstlyft går till.',
  openGraph: {
    title: 'Bröstlyft i Stockholm - Dahliakliniken',
    description:
      'Om brösthuden är lös och hänger kan den ofta fyllas ut med bröstimplantat på ett estetiskt vackert sätt. Här kan du läsa om hur ett bröstlyft går till.'
  },
  twitter: {
    title: 'Bröstlyft i Stockholm - Dahliakliniken',
    description:
      'Om brösthuden är lös och hänger kan den ofta fyllas ut med bröstimplantat på ett estetiskt vackert sätt. Här kan du läsa om hur ett bröstlyft går till.'
  }
}

export default async function Page() {
  const canonical = canonicalUrl('/brostoperationer/brostlyft')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SurgicalProcedure',
        '@id': `${canonical}#procedure`,
        url: canonical,
        name: 'Bröstlyft i Stockholm - Dahliakliniken',
        description:
          'Bröstlyft är en plastikkirurgisk operation som återställer form och lyft genom att ta bort överskottshud och strama upp bröstvävnaden. Bröstvårtan kan vid behov flyttas till en högre position.',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonical}#primaryimage`,
          url: `${SITE_URL}/_next/static/media/_N3A7179.4d8b8053.jpg`
        },
        mainEntityOfPage: { '@id': canonical },
        potentialAction: {
          '@type': 'ScheduleAction',
          target: `${SITE_URL}/boka`
        }
      },
      {
        '@type': 'MedicalWebPage',
        '@id': canonical,
        url: canonical,
        name: 'Bröstlyft i Stockholm - Dahliakliniken',
        inLanguage: 'sv-SE',
        isPartOf: { '@id': `${SITE_URL}#website` },
        publisher: { '@id': `${SITE_URL}#organization` },
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
            name: 'Bröstlyft',
            item: canonical
          }
        ]
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Brostlyft />
    </>
  )
}
