/**
 * @file Type Aliases - BitwiseOperator
 * @module esast/types/BitwiseOperator
 */

import type {
  BitwiseBinaryOperator,
  BitwiseShiftOperator
} from '@flex-development/esast'

/**
 * Bitwise operators.
 *
 * @see {@linkcode BitwiseBinaryOperator}
 * @see {@linkcode BitwiseShiftOperator}
 */
type BitwiseOperator = BitwiseBinaryOperator | BitwiseShiftOperator

export type { BitwiseOperator as default }
