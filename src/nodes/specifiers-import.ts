/**
 * @file Nodes - ImportSpecifiers
 * @module esast/nodes/ImportSpecifiers
 */

import type {
  Comment,
  Data,
  ImportSpecifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with import specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportSpecifiersData extends Data {}

/**
 * A collection of import specifiers.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportSpecifiers extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode ImportSpecifier}
   */
  children: (Comment | ImportSpecifier)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportSpecifiersData}
   */
  data?: ImportSpecifiersData | undefined

  /**
   * Node type.
   */
  type: 'importSpecifiers'
}

export type { ImportSpecifiersData, ImportSpecifiers as default }
