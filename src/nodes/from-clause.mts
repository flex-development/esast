/**
 * @file Nodes - FromClause
 * @module esast/nodes/FromClause
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with `from` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FromClauseData extends Data {}

/**
 * The `from` clause of an `export` or `import` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FromClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children: [...comments: Comments, specifier: Identifier | StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FromClauseData}
   */
  data?: FromClauseData | undefined

  /**
   * Node type.
   */
  type: 'fromClause'
}

export type { FromClause as default, FromClauseData }
