/**
 * @file Nodes - ForStatement
 * @module esast/nodes/ForStatement
 */

import type {
  Data,
  Expression,
  Nothing,
  Parent,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Nothing}
   * @see {@linkcode Statement}
   * @see {@linkcode VariableDeclaration}
   */
  children: [
    init: Expression | Nothing | VariableDeclaration,
    test: Expression | Nothing,
    update: Expression | Nothing,
    body: Statement
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ForStatementData}
   */
  data?: Optional<ForStatementData>

  /**
   * Node type.
   */
  type: 'forStatement'
}

export type { ForStatementData, ForStatement as default }
