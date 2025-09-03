export const SITE_URL = process.env.SITE_URL || 'https://www.dahliakliniken.se'

export const canonicalUrl = (path = '') => {
  // ensure single slash between base and path
  const base = SITE_URL.replace(/\/$/, '')
  const suffix = String(path || '').replace(/^\//, '')
  return suffix ? `${base}/${suffix}` : base
}
