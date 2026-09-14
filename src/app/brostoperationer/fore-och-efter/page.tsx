import { BreadcrumbJsonLd } from '@/app/components/navigation/BreadcrumbJsonLd'
import { createPageMetadata } from '@/app/config/metadata'

import ForeOchEfter from './ForeOchEfter'

export const metadata = createPageMetadata({
  title: 'Före och efter - Dahliakliniken',
  description:
    'Före och efter-bilder av Dr Gribbes bröstoperationer. Se patienters resultat och möjligheterna för din egen förändring.',
  path: '/brostoperationer/fore-och-efter'
})

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd path="/brostoperationer/fore-och-efter" />
      <ForeOchEfter />
    </>
  )
}
