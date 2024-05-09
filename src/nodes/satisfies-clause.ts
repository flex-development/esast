/**
 * @file Nodes - SatisfiesClause
 * @module esast/nodes/SatisfiesClause
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with `satisfies` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SatisfiesClauseData extends Data {}

/**
 * A `satisfies` clause.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator
 *
 * @extends {Parent}
 */
interface SatisfiesClause extends Parent {
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
   * @see {@linkcode SatisfiesClauseData}
   */
  data?: SatisfiesClauseData | undefined

  /**
   * Node type.
   */
  type: 'satisfiesClause'
}

export type { SatisfiesClauseData, SatisfiesClause as default }
