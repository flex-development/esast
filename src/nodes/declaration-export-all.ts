/**
 * @file Nodes - ExportAllDeclaration
 * @module esast/nodes/ExportAllDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Identifier,
  Nothing,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with aggregate `export` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ExportAllDeclarationData extends Data {}

/**
 * An aggregate `export` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ExportAllDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode Nothing}
   * @see {@linkcode StringLiteral}
   */
  children: [
    ...comments: Comments,
    exported: Identifier | Nothing | StringLiteral,
    ...comments: InternalComments,
    source: StringLiteral
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ExportAllDeclarationData}
   */
  data?: Optional<ExportAllDeclarationData>

  /**
   * Node type.
   */
  type: 'exportAllDeclaration'
}

export type { ExportAllDeclarationData, ExportAllDeclaration as default }
