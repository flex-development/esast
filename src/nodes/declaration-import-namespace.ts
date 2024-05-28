/**
 * @file Nodes - ImportNamespaceDeclaration
 * @module esast/nodes/ImportNamespaceDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  FromClause,
  ImportAssertion,
  ImportDeclaration,
  ImportKind,
  NamespaceImport
} from '@flex-development/esast'

/**
 * A namespace `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportNamespaceDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode NamespaceImport}
   */
  children:
    | [
      ...comments: Comments,
      imports: NamespaceImport,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      imports: NamespaceImport,
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
  kind: Extract<ImportKind, 'namespace'>
}

export type { ImportNamespaceDeclaration as default }
