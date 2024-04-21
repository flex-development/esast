/**
 * @file Nodes - CatchClause
 * @module esast/nodes/CatchClause
 */

import type { InternalComments } from '#internal'
import type {
  ArrayPattern,
  BlockStatement,
  Comments,
  Data,
  Identifier,
  ObjectPattern,
  Parent,
  TypeAnnotation
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `catch` clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CatchClauseData extends Data {}

/**
 * A `catch` clause.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface CatchClause extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ArrayPattern}
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ObjectPattern}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      ...comments: Comments,
      param: ArrayPattern | Identifier | ObjectPattern,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      param: ArrayPattern | Identifier | ObjectPattern,
      ...comments: InternalComments,
      typeAnnotation: TypeAnnotation,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [...comments: Comments, body: BlockStatement]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CatchClauseData}
   */
  data?: Optional<CatchClauseData>

  /**
   * Node type.
   */
  type: 'catchClause'
}

export type { CatchClauseData, CatchClause as default }
