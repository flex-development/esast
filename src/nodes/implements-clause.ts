/**
 * @file Nodes - ImplementsClause
 * @module esast/nodes/ImplementsClause
 */

import type {
  Comment,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `implements` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImplementsClauseData extends Data {}

/**
 * The `implements` clause of a class declaration or expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImplementsClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode TypeExpression}
   */
  children: [...(Comment | TypeExpression)[], TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImplementsClauseData}
   */
  data?: Optional<ImplementsClauseData>

  /**
   * Node type.
   */
  type: 'implementsClause'
}

export type { ImplementsClauseData, ImplementsClause as default }
