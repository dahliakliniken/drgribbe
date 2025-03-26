import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://dahliakliniken.se'

  return [
    { url: `${baseUrl}/boka`, lastModified: new Date() },
    { url: `${baseUrl}/brostoperationer`, lastModified: new Date() },
    {
      url: `${baseUrl}/brostoperationer/brostforminskning`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/brostoperationer/brostforstoring`,
      lastModified: new Date()
    },
    { url: `${baseUrl}/brostoperationer/brostlyft`, lastModified: new Date() },
    {
      url: `${baseUrl}/brostoperationer/fore-och-efter`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/brostoperationer/implantaten`,
      lastModified: new Date()
    },
    { url: `${baseUrl}/fragor-och-svar`, lastModified: new Date() },
    { url: `${baseUrl}/garanti`, lastModified: new Date() },
    { url: `${baseUrl}/hud-och-injektioner`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt-och-besok`, lastModified: new Date() },
    { url: `${baseUrl}/personuppgiftspolicy`, lastModified: new Date() },
    { url: `${baseUrl}/priser`, lastModified: new Date() },
    { url: `${baseUrl}/var-personal`, lastModified: new Date() }
  ]
}
