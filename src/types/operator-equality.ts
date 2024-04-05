/**
 * @file Type Aliases - EqualityOperator
 * @module esast/types/EqualityOperator
 */

/**
 * Equality operators.
 *
 * The result of evaluating an equality operator is a `boolean` based on whether
 * the comparison is `true`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#equality_operators
 * @see https://tc39.es/ecma262/#sec-equality-operators
 */
type EqualityOperator = '!=' | '!==' | '==' | '==='

export type { EqualityOperator as default }
