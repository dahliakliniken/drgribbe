import { Metadata } from 'next'

import { canonicalUrl,SITE_URL } from '@/app/config/site'
import { JsonLd } from '@/components/surfaces/JsonLd'

import Brostforminskning from './Brostforminskning'

export const metadata: Metadata = {
  title: 'Bröstförminskning i Stockholm - Dahliakliniken',
  description:
    'Om den egna bysten är stor och tung kan brösten minskas genom en bröstförminskning. Operationen är mycket lik operationen bröstlyft med skillnaden att mer eller mindre egen bröstvävnad tas bort.',
  openGraph: {
    title: 'Bröstförminskning i Stockholm - Dahliakliniken',
    description:
      'Om den egna bysten är stor och tung kan brösten minskas genom en bröstförminskning. Operationen är mycket lik operationen bröstlyft med skillnaden att mer eller mindre egen bröstvävnad tas bort.'
  },
  twitter: {
    title: 'Bröstförminskning i Stockholm - Dahliakliniken',
    description:
      'Om den egna bysten är stor och tung kan brösten minskas genom en bröstförminskning. Operationen är mycket lik operationen bröstlyft med skillnaden att mer eller mindre egen bröstvävnad tas bort.'
  }
}

export default async function Page() {
  const canonical = canonicalUrl('/brostoperationer/brostforminskning')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SurgicalProcedure',
        '@id': `${canonical}#procedure`,
        url: canonical,
        name: 'Bröstförminskning i Stockholm - Dahliakliniken',
        description:
          'Bröstförminskning är en plastikkirurgisk operation som syftar till att minska bröstens storlek och vikt genom att ta bort överflödig bröstvävnad. Detta kan hjälpa till att återställa en mer proportionerlig kroppsform och lindra obehag orsakade av tunga bröst.',
        image: {
          '@type': 'ImageObject',
          '@id': `${canonical}#primaryimage`,
          url: `${SITE_URL}/_next/static/media/_N3A7302.7dc569a3.jpg`
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
        name: 'Bröstförminskning i Stockholm - Dahliakliniken',
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
            name: 'Bröstförminskning',
            item: canonical
          }
        ]
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Brostforminskning />
    </>
  )
}
