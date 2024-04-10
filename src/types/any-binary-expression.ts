/**
 * @file Type Aliases - AnyBinaryExpression
 * @module esast/types/AnyBinaryExpression
 */

import type {
  ArithmeticExpression,
  BitwiseExpression,
  EqualityExpression,
  LogicalExpression,
  RelationalExpression
} from '@flex-development/esast'

/**
 * Any binary expression.
 *
 * @see {@linkcode ArithmeticExpression}
 * @see {@linkcode BitwiseExpression}
 * @see {@linkcode EqualityExpression}
 * @see {@linkcode LogicalExpression}
 * @see {@linkcode RelationalExpression}
 */
type AnyBinaryExpression =
  | ArithmeticExpression
  | BitwiseExpression
  | EqualityExpression
  | LogicalExpression
  | RelationalExpression

export type { AnyBinaryExpression as default }
