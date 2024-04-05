/**
 * @file Nodes - ExportNamedDeclaration
 * @module esast/nodes/ExportNamedDeclaration
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
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with named `export` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportNamedDeclarationData extends Data {}

/**
 * A named `export` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportNamedDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassDeclaration}
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Declaration}
   * @see {@linkcode Decorator}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      specifiers: ExportSpecifiers,
      ...comments: InternalComments,
      source: StringLiteral
    ]
    | [...(Comment | Decorator)[], declaration: ClassDeclaration]
    | [...comments: Comments, declaration: Declaration]
    | [...comments: Comments, specifiers: ExportSpecifiers]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportNamedDeclarationData}
   */
  data?: Optional<ExportNamedDeclarationData>

  /**
   * Node type.
   */
  type: 'exportNamedDeclaration'
}

export type { ExportNamedDeclarationData, ExportNamedDeclaration as default }
