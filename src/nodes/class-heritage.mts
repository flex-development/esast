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

/**
 * Info associated with `class` heritage clause lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassHeritageData extends Data {}

/**
 * A `class` heritage clause list.
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
  data?: ClassHeritageData | undefined

  /**
   * Node type.
   */
  type: 'classHeritage'
}

export type { ClassHeritageData, ClassHeritage as default }
