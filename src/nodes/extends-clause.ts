/**
 * @file Nodes - ExtendsClause
 * @module esast/nodes/ExtendsClause
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with `extends` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExtendsClauseData extends Data {}

/**
 * The `extends` clause of a class, interface, or type parameter.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExtendsClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...(Comment | Expression | TypeExpression)[],
      expression: Expression | TypeExpression
    ]
    | [...comments: Comments, expression: Expression | TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExtendsClauseData}
   */
  data?: ExtendsClauseData | undefined

  /**
   * Node type.
   */
  type: 'extendsClause'
}

export type { ExtendsClauseData, ExtendsClause as default }
