# Internationalization

The project uses [**next-intl**](https://next-intl-docs.vercel.app/) for internationalization, currently supporting one language.

## How to Use Next-Intl

### Accessing Translations in Components

To use translations in your components or pages, import the `useTranslations` hook and reference the relevant keys from the translation files.

```tsx
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations()

  return <h1>{t('welcome')}</h1>
}
```

### Translation Keys

All translation keys are stored in JSON files located in the `src/messages/` directory. These files contain key-value pairs where the key is a reference used in the code, and the value is the actual text that gets displayed.

Example of the structure in `en.json`:

```json
{
  "welcome": "Welcome to our website",
  "login": "Login",
  "logout": "Logout"
}
```

### Adding New Translations

1. Open the relevant JSON file in `src/messages/`.
2. Add a new key-value pair for the text you want to translate.

For example, to add a new label for a button:

```json
{
  "welcome": "Welcome to our website",
  "login": "Login",
  "logout": "Logout",
  "submit": "Submit"
}
```
