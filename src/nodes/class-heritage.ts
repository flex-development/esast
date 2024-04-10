/**
 * @file Nodes - ClassHeritage
 * @module esast/nodes/ClassHeritage
 */

import type {
  Comments,
  Data,
  ExtendsClause,
  ImplementsClause,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `class` heritage clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassHeritageData extends Data {}

/**
 * A collection of `class` heritage clauses.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassHeritage extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode ImplementsClause}
   */
  children:
    | [
      extend: ExtendsClause,
      ...comments: Comments,
      implement: ImplementsClause
    ]
    | [
      implement: ImplementsClause,
      ...comments: Comments,
      extend: ExtendsClause
    ]
    | [extend: ExtendsClause]
    | [implement: ImplementsClause]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassHeritageData}
   */
  data?: Optional<ClassHeritageData>

  /**
   * Node type.
   */
  type: 'classHeritage'
}

export type { ClassHeritageData, ClassHeritage as default }
