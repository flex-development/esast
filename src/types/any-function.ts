/**
 * @file Type Definitions - AnyFunction
 * @module esast/types/AnyFunction
 */

import type {
  FunctionDeclaration,
  FunctionExpression
} from '@flex-development/esast'

/**
 * A function declaration or expression.
 *
 * @see {@linkcode FunctionExpression}
 * @see {@linkcode FunctionDeclaration}
 */
type AnyFunction = FunctionDeclaration | FunctionExpression

export type { AnyFunction as default }
