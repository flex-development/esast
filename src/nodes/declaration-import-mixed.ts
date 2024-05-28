/**
 * @file Nodes - MixedImportDeclaration
 * @module esast/nodes/MixedImportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  FromClause,
  Identifier,
  ImportAssertion,
  ImportDeclaration,
  ImportKind,
  ImportSpecifiers,
  NamespaceImport
} from '@flex-development/esast'

/**
 * A mixed import declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface MixedImportDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportSpecifiers}
   * @see {@linkcode NamespaceImport}
   */
  children:
    | [
      ...comments: Comments,
      import: Identifier,
      ...comments: InternalComments,
      imports: ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      import: Identifier,
      ...comments: InternalComments,
      imports: ImportSpecifiers | NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: Extract<ImportKind, `default+${string}`>
}

export type { MixedImportDeclaration as default }
