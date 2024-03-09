/**
 * @file Nodes - ClassHeritage
 * @module esast/nodes/ClassHeritage
 */

import type { Data, Heritage, Parent } from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Heritage}
   */
  children: EmptyArray | [Heritage, ...Heritage[]]

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
