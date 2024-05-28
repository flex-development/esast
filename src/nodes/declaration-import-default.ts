/**
 * @file Nodes - ImportDefaultDeclaration
 * @module esast/nodes/ImportDefaultDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  FromClause,
  Identifier,
  ImportAssertion,
  ImportDeclaration,
  ImportKind
} from '@flex-development/esast'

/**
 * A default `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportDefaultDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FromClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   */
  children:
    | [
      ...comments: Comments,
      imports: Identifier,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      imports: Identifier,
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
  kind: Extract<ImportKind, 'default'>
}

export type { ImportDefaultDeclaration as default }
