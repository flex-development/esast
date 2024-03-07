/**
 * @file Type Definitions - LogicalOperator
 * @module esast/types/LogicalOperator
 */

/**
 * Logical operators.
 *
 * Logical operators implement `boolean` values and have [short-circuiting][1]
 * behavior.
 *
 * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Operator_precedence#short-circuiting
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#binary_logical_operators
 */
type LogicalOperator = '??' | '&&' | '||'

export type { LogicalOperator as default }
