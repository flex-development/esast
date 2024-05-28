/**
 * @file Nodes - NamespaceImport
 * @module esast/nodes/NamespaceImport
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with namespace imports.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NamespaceImportData extends Data {}

/**
 * A namespace import (`* as foo`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NamespaceImport extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   */
  children: [...comments: Comments, identifier: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NamespaceImportData}
   */
  data?: NamespaceImportData | undefined

  /**
   * Node type.
   */
  type: 'namespaceImport'
}

export type { NamespaceImport as default, NamespaceImportData }
