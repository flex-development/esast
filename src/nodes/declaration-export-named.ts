/**
 * @file Nodes - ExportNamedDeclaration
 * @module esast/nodes/ExportNamedDeclaration
 */

import type {
  Data,
  Declaration,
  ExportSpecifiers,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Declaration}
   * @see {@linkcode ExportSpecifiers}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      declaration: Nullable<Declaration>,
      specifiers: ExportSpecifiers,
      source: StringLiteral
    ]
    | [declaration: Nullable<Declaration>, specifiers: ExportSpecifiers]

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
