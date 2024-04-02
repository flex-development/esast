/**
 * @file Type Definitions - BitwiseShiftOperator
 * @module esast/types/BitwiseShiftOperator
 */

/**
 * Bitwise shift operators.
 *
 * Bitwise shift operators shift bits of an operand.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators
 * @see https://tc39.es/ecma262/#sec-bitwise-shift-operators
 */
type BitwiseShiftOperator = '<<' | '>>' | '>>>'

export type { BitwiseShiftOperator as default }
