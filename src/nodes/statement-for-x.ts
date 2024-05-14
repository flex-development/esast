/**
 * @file Nodes - ForXStatement
 * @module esast/nodes/ForXStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
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
   * Boolean indicating `await` keyword was used, possibly erroneously.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols
   */
  await?: boolean | null | undefined

  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   * @see {@linkcode Statement}
   * @see {@linkcode VariableDeclaration}
   */
  children: [
    ...comments: Comments,
    left: Pattern | VariableDeclaration,
    ...comments: InternalComments,
    right: Expression,
    ...comments: InternalComments,
    body: Statement
  ]

  /**
   * Node type.
   */
  type: `for${'In' | 'Of'}Statement`
}

export type { ForXStatement as default }
