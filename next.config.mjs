import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Omit 3840: large PNGs emit only that srcset width, and the optimizer returns 400.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    formats: ['image/avif', 'image/webp']
  }
}

export default withNextIntl(nextConfig)
