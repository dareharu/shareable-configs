import type { PrettierSchema } from './schema'

/**
 * Shareable Prettier config for Dareharu project.
 * @example
 * ```json
 * {
 *   "prettier": "@dareharu/prettier-config"
 * }
 * ```
 * @example
 * ```js
 * module.exports = require('@dareharu/prettier-config')
 * ```
 */
const prettierConfig: PrettierSchema = {
  $schema: 'http://json.schemastore.org/prettierrc',
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  useTabs: false,
  overrides: [
    {
      files: ['.cliff-jumperrc', '.all-contributorsrc'],
      options: {
        parser: 'json'
      }
    },
    {
      files: ['.github/CODEOWNERS'],
      options: {
        parser: 'yaml'
      }
    }
  ]
}

export { prettierConfig }

// Avoid to use "export default" in production on your project.
// Default exports don't export any name.
export default prettierConfig
