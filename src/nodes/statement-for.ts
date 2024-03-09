/**
 * @file Nodes - ForStatement
 * @module esast/nodes/ForStatement
 */

import type {
  Data,
  Expression,
  Parent,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Statement}
   * @see {@linkcode VariableDeclaration}
   */
  children: [
    init: Nullable<Expression | VariableDeclaration>,
    test: Nullable<Expression>,
    update: Nullable<Expression>,
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
