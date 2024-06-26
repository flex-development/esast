/**
 * @file Nodes - ImplementsClause
 * @module esast/nodes/ImplementsClause
 */

import type {
  Comment,
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

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
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [...(Comment | TypeExpression)[], type: TypeExpression]
    | [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImplementsClauseData}
   */
  data?: ImplementsClauseData | undefined

  /**
   * Node type.
   */
  type: 'implementsClause'
}

export type { ImplementsClauseData, ImplementsClause as default }
