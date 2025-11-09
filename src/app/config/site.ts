export const SITE_URL = process.env.SITE_URL || 'https://www.dahliakliniken.se'
export const CLINIC_ID = `${SITE_URL}/#clinic`
export const ORG_ID = `${SITE_URL}/#organization`

export const canonicalUrl = (path = '') => {
  // ensure single slash between base and path
  const base = SITE_URL.replace(/\/$/, '')
  const suffix = String(path || '').replace(/^\//, '')
  return suffix ? `${base}/${suffix}` : base
}
