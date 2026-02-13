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
  ecmaVersion?: EcmaVersion | null | undefined

  /**
   * Source document validation mode.
   *
   * @see {@linkcode SourceMode}
   */
  mode?: SourceMode | null | undefined
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
  data?: RootData | undefined

  /**
   * Node type.
   */
  type: 'root'
}

export type { RootData, Root as default }
