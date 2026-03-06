import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/tack']
      }
    ],
    sitemap: process.env.SITE_URL || 'https://www.dahliakliniken.se'
  }
}
