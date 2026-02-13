/**
 * @file Type Aliases - AnyForStatement
 * @module esast/types/AnyForStatement
 */

import type {
  ForInStatement,
  ForOfStatement,
  ForStatement
} from '@flex-development/esast'

/**
 * Any `for` statement.
 *
 * @see {@linkcode ForInStatement}
 * @see {@linkcode ForOfStatement}
 * @see {@linkcode ForStatement}
 */
type AnyForStatement = ForInStatement | ForOfStatement | ForStatement

export type { AnyForStatement as default }
