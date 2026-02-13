/**
 * @file eslint
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

import fldv from '@flex-development/eslint-config'

/**
 * eslint configuration.
 *
 * @type {import('eslint').Linter.Config[]}
 * @const config
 */
const config = [
  ...fldv.configs.node,
  {
    files: [
      'src/content/declaration.mts',
      'src/content/expression-atomic.mts',
      'src/content/expression-primary.mts',
      'src/content/node.mts'
    ],
    rules: {
      'unicorn/no-keyword-prefix': 0
    }
  }
]

export default config
