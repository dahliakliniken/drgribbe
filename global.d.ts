/// <reference types="next/image-types/global" />

import sv from './messages/sv.json'

type Messages = typeof sv

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages
}
