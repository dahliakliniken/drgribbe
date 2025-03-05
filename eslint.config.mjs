import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier']
  }),
  {
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-no-literals': 'error',
      'simple-import-sort/imports': 'error'
    }
  },
  {
    ignores: ['node_modules', 'dist', 'public', '.next']
  },
  eslintConfigPrettier
]
