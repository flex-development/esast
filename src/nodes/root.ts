/**
 * @file Nodes - Root
 * @module esast/nodes/Root
 */

import type {
  Data,
  EcmaVersion,
  Parent,
  RootChild,
  SourceMode
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with documents.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RootData extends Data {
  /**
   * ECMAScript version of source document.
   *
   * @see {@linkcode EcmaVersion}
   */
  ecmaVersion?: Nilable<EcmaVersion>

  /**
   * Source document validation mode.
   *
   * @see {@linkcode SourceMode}
   */
  mode?: Nilable<SourceMode>
}

/**
 * A document fragment or whole document.
 *
 * Should be used as the root of a tree; must not be used as a child.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Root extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode RootChild}
   */
  children: RootChild[]

  /**
   * Data associated with esast root.
   *
   * @see {@linkcode RootData}
   */
  data?: Optional<RootData>

  /**
   * Node type.
   */
  type: 'root'
}

export type { RootData, Root as default }
