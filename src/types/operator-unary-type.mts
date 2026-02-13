/**
 * @file Type Aliases - UnaryTypeOperator
 * @module esast/types/UnaryTypeOperator
 */

/**
 * Unary type operators.
 *
 * A unary operation is an operation with only one operand.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * @see https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
 * @see https://www.typescriptlang.org/docs/handbook/symbols.html#unique-symbol
 */
type UnaryTypeOperator = 'keyof' | 'readonly' | 'typeof' | 'unique'

export type { UnaryTypeOperator as default }
