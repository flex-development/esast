/**
 * @file Nodes - ExportNamedDeclaration
 * @module esast/nodes/ExportNamedDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassDeclaration,
  Comment,
  Comments,
  Declaration,
  Decorator,
  ExportDeclaration,
  ExportKind,
  ExportSpecifiers,
  Identifier,
  ImportAssertion,
  ImportAttributeClause,
  StringLiteral
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
   * @see {@linkcode ClassDeclaration}
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Declaration}
   * @see {@linkcode Decorator}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportAttributeClause}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral
    ]
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion | ImportAttributeClause
    ]
    | [...(Comment | Decorator)[], declaration: ClassDeclaration]
    | [...comments: Comments, declaration: Declaration]
    | [...comments: Comments, specifiers: ExportSpecifiers]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'named'>
}

export type { ExportNamedDeclaration as default }
