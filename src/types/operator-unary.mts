/**
 * @file Type Aliases - UnaryOperator
 * @module esast/types/UnaryOperator
 */

/**
 * Unary operators.
 *
 * A unary operation is an operation with only one operand.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#unary_operators
 * @see https://tc39.es/ecma262/#sec-unary-operators
 */
type UnaryOperator = '-' | '!' | '+' | '~' | 'delete' | 'typeof' | 'void'

export type { UnaryOperator as default }
