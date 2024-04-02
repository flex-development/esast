/**
 * @file Type Definitions - RelationalOperator
 * @module esast/types/RelationalOperator
 */

/**
 * Relational operators.
 *
 * A relational operator compares its operands and returns a `boolean` value
 * based on whether the comparison is `true`.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#relational_operators
 * @see https://tc39.es/ecma262/#sec-relational-operators
 */
type RelationalOperator = '<' | '<=' | '>' | '>=' | 'in' | 'instanceof'

export type { RelationalOperator as default }
