/**
 * @file Nodes - NamespaceExport
 * @module esast/nodes/NamespaceExport
 */

import type {
  Comments,
  Data,
  EmptyChildren,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with namespace exports.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface NamespaceExportData extends Data {}

/**
 * A namespace export (`* as foo`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface NamespaceExport extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | EmptyChildren
    | [...comments: Comments, identifier: Identifier | StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode NamespaceExportData}
   */
  data?: NamespaceExportData | undefined

  /**
   * Node type.
   */
  type: 'namespaceExport'
}

export type { NamespaceExport as default, NamespaceExportData }
