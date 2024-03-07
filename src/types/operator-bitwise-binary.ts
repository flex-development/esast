/**
 * @file Type Definitions - BitwiseBinaryOperator
 * @module esast/types/BitwiseBinaryOperator
 */

/**
 * Bitwise binary operators.
 *
 * Bitwise operators treat their operands as a set of `32` bits (zeros and ones)
 * and return standard JavaScript numerical values.
 *
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators#binary_bitwise_operators
 */
type BitwiseBinaryOperator = '&' | '^' | '|'

export type { BitwiseBinaryOperator as default }
