/**
 * @file Nodes - ForOfStatement
 * @module esast/nodes/ForOfStatement
 */

import type { Data, ForXStatement } from '@flex-development/esast'

/**
 * Info associated with `for...of` statements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ForOfStatementData extends Data {}

/**
 * A `for...of` statement.
 *
 * @see {@linkcode ForXStatement}
 *
 * @extends {ForXStatement}
 */
interface ForOfStatement extends ForXStatement {
  /**
   * Iterating over [async iterable objects][1]?
   *
   * [1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols
   */
  await: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ForOfStatementData}
   */
  data?: ForOfStatementData | undefined

  /**
   * Node type.
   */
  type: 'forOfStatement'
}

export type { ForOfStatementData, ForOfStatement as default }
