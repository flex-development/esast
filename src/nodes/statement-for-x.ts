/**
 * @file Nodes - ForXStatement
 * @module esast/nodes/ForXStatement
 */

import type {
  Expression,
  Parent,
  Pattern,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'

/**
 * A `for...of` or `for...in` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ForXStatement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   * @see {@linkcode Statement}
   * @see {@linkcode VariableDeclaration}
   */
  children: [
    left: Pattern | VariableDeclaration,
    right: Expression,
    body: Statement
  ]

  /**
   * Node type.
   */
  type: `for${Uppercase<string>}${string}`
}

export type { ForXStatement as default }
