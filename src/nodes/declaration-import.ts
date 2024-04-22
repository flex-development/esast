/**
 * @file Nodes - ImportDeclaration
 * @module esast/nodes/ImportDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  CallExpression,
  Comments,
  Data,
  Identifier,
  ImportAssertion,
  ImportAttributeClause,
  ImportKind,
  ImportSpecifiers,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with `import` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportDeclarationData extends Data {
  /**
   * Type-only import?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: Nilable<boolean>
}

/**
 * An `import` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallExpression}
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode ImportAttributeClause}
   * @see {@linkcode ImportSpecifiers}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      left: ImportSpecifiers,
      ...comments: InternalComments,
      right: CallExpression
    ]
    | [
      ...comments: Comments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion | ImportAttributeClause
    ]
    | [
      ...comments: Comments,
      specifiers: ImportSpecifiers,
      ...comments: InternalComments,
      source: Identifier | StringLiteral
    ]
    | [
      ...comments: Comments,
      specifiers: ImportSpecifiers,
      ...comments: InternalComments,
      source: StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion | ImportAttributeClause
    ]
    | [...comments: Comments, source: Identifier | StringLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportDeclarationData}
   */
  data?: Optional<ImportDeclarationData>

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: ImportKind

  /**
   * Node type.
   */
  type: 'importDeclaration'
}

export type { ImportDeclarationData, ImportDeclaration as default }
