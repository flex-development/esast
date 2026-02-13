/**
 * @file Type Aliases - AnyFunction
 * @module esast/types/AnyFunction
 */

import type {
  ArrowFunctionExpression,
  FunctionDeclaration,
  FunctionExpression
} from '@flex-development/esast'

/**
 * A function declaration or expression.
 *
 * @see {@linkcode ArrowFunctionExpression}
 * @see {@linkcode FunctionExpression}
 * @see {@linkcode FunctionDeclaration}
 */
type AnyFunction =
  | ArrowFunctionExpression
  | FunctionDeclaration
  | FunctionExpression

export type { AnyFunction as default }
