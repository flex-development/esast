/**
 * @file Nodes - ForStatement
 * @module esast/nodes/ForStatement
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Expression,
  Nothing,
  Parent,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'

/**
 * Info associated with `for` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ForStatementData extends Data {}

/**
 * A `for` statement.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ForStatement extends Parent {
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
   * @see {@linkcode Nothing}
   * @see {@linkcode Statement}
   * @see {@linkcode VariableDeclaration}
   */
  children: [
    ...comments: Comments,
    init: Expression | Nothing | VariableDeclaration,
    ...comments: InternalComments,
    test: Expression | Nothing,
    ...comments: InternalComments,
    update: Expression | Nothing,
    ...comments: InternalComments,
    body: Statement
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ForStatementData}
   */
  data?: ForStatementData | undefined

  /**
   * Node type.
   */
  type: 'forStatement'
}

export type { ForStatement as default, ForStatementData }
