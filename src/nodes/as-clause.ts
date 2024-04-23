/**
 * @file Nodes - AsClause
 * @module esast/nodes/AsClause
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `as` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AsClauseData extends Data {}

/**
 * An `as` clause.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
 *
 * @extends {Parent}
 */
interface AsClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AsClauseData}
   */
  data?: Optional<AsClauseData>

  /**
   * Node type.
   */
  type: 'asClause'
}

export type { AsClauseData, AsClause as default }
