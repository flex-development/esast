/**
 * @file Nodes - ExportDeclaration
 * @module esast/nodes/ExportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassDeclaration,
  Comment,
  Comments,
  Data,
  Declaration,
  Decorator,
  ExportSpecifiers,
  Expression,
  FunctionDeclaration,
  Identifier,
  ImportAssertion,
  ImportAttributeClause,
  ImportExportKind,
  ModuleDeclaration,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with export declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportDeclarationData extends Data {
  /**
   * Type-only export?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: Nilable<boolean>
}

/**
 * An export declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassDeclaration}
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Declaration}
   * @see {@linkcode Decorator}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionDeclaration}
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportAttributeClause}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      declaration:
        | ClassDeclaration
        | Expression
        | FunctionDeclaration
        | ModuleDeclaration
    ]
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
    | [...comments: Comments, right: Expression]
    | [...comments: Comments, source: Identifier | StringLiteral]
    | [...comments: Comments, specifiers: ExportSpecifiers]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportDeclarationData}
   */
  data?: Optional<ExportDeclarationData>

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ImportExportKind}
   */
  kind: ImportExportKind

  /**
   * Node type.
   */
  type: 'exportDeclaration'
}

export type { ExportDeclarationData, ExportDeclaration as default }
