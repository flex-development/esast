/**
 * @file Nodes - ExportDeclaration
 * @module esast/nodes/ExportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  AmbientDeclaration,
  ClassDeclaration,
  Comment,
  Comments,
  Data,
  Declaration,
  Decorator,
  ExportKind,
  ExportSpecifiers,
  Expression,
  FunctionDeclaration,
  Identifier,
  ImportAssertion,
  ModuleDeclaration,
  Parent,
  StringLiteral
} from '@flex-development/esast'

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
  typeOnly?: boolean | null | undefined
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
   * @see {@linkcode AmbientDeclaration}
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
      attributes: ImportAssertion
    ]
    | [...(Comment | Decorator)[], declaration: ClassDeclaration]
    | [...comments: Comments, declaration: AmbientDeclaration | Declaration]
    | [...comments: Comments, right: Expression]
    | [...comments: Comments, source: Identifier | StringLiteral]
    | [...comments: Comments, specifiers: ExportSpecifiers]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportDeclarationData}
   */
  data?: ExportDeclarationData | undefined

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: ExportKind

  /**
   * Node type.
   */
  type: 'exportDeclaration'
}

export type { ExportDeclarationData, ExportDeclaration as default }
