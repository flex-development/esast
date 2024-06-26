/**
 * @file ESLint Configuration - Root
 * @module config/eslint
 * @see https://eslint.org/docs/user-guide/configuring
 */

/**
 * @type {import('eslint').Linter.Config}
 * @const config - ESLint configuration object
 */
const config = {
  extends: ['./.eslintrc.base.cjs'],
  overrides: [
    ...require('./.eslintrc.base.cjs').overrides,
    {
      files: [
        'src/content/declaration.ts',
        'src/content/expression-atomic.ts',
        'src/content/expression-primary.ts',
        'src/content/node.ts'
      ],
      rules: {
        'unicorn/no-keyword-prefix': 0
      }
    }
  ],
  root: true
}

module.exports = config
