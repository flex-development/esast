/**
 * @file Nodes - ImportNamedDeclaration
 * @module esast/nodes/ImportNamedDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  FromClause,
  ImportAssertion,
  ImportDeclaration,
  ImportKind,
  ImportSpecifiers
} from '@flex-development/esast'

/**
 * A named `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportNamedDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportSpecifiers}
   */
  children:
    | [
      ...comments: Comments,
      imports: ImportSpecifiers,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      imports: ImportSpecifiers,
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
  kind: Extract<ImportKind, 'named'>
}

export type { ImportNamedDeclaration as default }
