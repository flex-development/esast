/**
 * @file Type Definitions - BinaryOperator
 * @module esast/types/BinaryOperator
 */

import type {
  ArithmeticOperator,
  BitwiseOperator,
  EqualityOperator,
  RelationalOperator
} from '@flex-development/esast'

/**
 * Binary operators.
 *
 * @see {@linkcode ArithmeticOperator}
 * @see {@linkcode BitwiseOperator}
 * @see {@linkcode EqualityOperator}
 * @see {@linkcode RelationalOperator}
 */
type BinaryOperator =
  | ArithmeticOperator
  | BitwiseOperator
  | EqualityOperator
  | RelationalOperator

export type { BinaryOperator as default }
