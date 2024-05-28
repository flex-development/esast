/**
 * @file Nodes - ExportNamespaceDeclaration
 * @module esast/nodes/ExportNamespaceDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  ExportDeclaration,
  ExportKind,
  FromClause,
  ImportAssertion,
  NamespaceExport
} from '@flex-development/esast'

/**
 * A namespace `export` declaration.
 *
 * @see {@linkcode ExportDeclaration}
 *
 * @extends {ExportDeclaration}
 */
interface ExportNamespaceDeclaration extends ExportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode NamespaceExport}
   * @see {@linkcode FromClause}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: NamespaceExport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: NamespaceExport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'namespace'>
}

export type { ExportNamespaceDeclaration as default }
