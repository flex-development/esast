/**
 * @file Nodes - ImportSpecifiers
 * @module esast/nodes/ImportSpecifiers
 */

import type {
  Comment,
  Comments,
  Data,
  EmptyChildren,
  ImportSpecifier,
  Nothing,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with named imports.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportSpecifiersData extends Data {}

/**
 * A named import specifier list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportSpecifiers extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Nothing}
   */
  children: (Comment | ImportSpecifier | Nothing)[] | Comments | EmptyChildren

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

export type { ImportSpecifiers as default, ImportSpecifiersData }
