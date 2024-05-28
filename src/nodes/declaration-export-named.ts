/**
 * @file Nodes - ExportNamedDeclaration
 * @module esast/nodes/ExportNamedDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Declaration,
  ExportDeclaration,
  ExportKind,
  ExportSpecifiers,
  FromClause,
  Identifier,
  ImportAssertion
} from '@flex-development/esast'

/**
 * A named `export` declaration.
 *
 * @see {@linkcode ExportDeclaration}
 *
 * @extends {ExportDeclaration}
 */
interface ExportNamedDeclaration extends ExportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Declaration}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode FromClause}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      from: FromClause,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]
    | [...comments: Comments, declaration: Declaration]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'named'>
}

export type { ExportNamedDeclaration as default }
