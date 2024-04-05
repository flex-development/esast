/**
 * @file Nodes - ExportNamedDeclaration
 * @module esast/nodes/ExportNamedDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Declaration,
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
   * @see {@linkcode Comments}
   * @see {@linkcode Declaration}
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
