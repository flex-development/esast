/**
 * @file Nodes - EnumDeclaration
 * @module esast/nodes/EnumDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  EnumBody,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `enum` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface EnumDeclarationData extends Data {}

/**
 * An `enum` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface EnumDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode EnumBody}
   * @see {@linkcode Identifier}
   */
  children: [
    ...comments: Comments,
    id: Identifier,
    ...comments: InternalComments,
    body: EnumBody
  ]

  /**
   * Const enum declaration?
   *
   * @see https://www.typescriptlang.org/docs/handbook/enums.html#const-enums
   */
  const: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EnumDeclarationData}
   */
  data?: Optional<EnumDeclarationData>

  /**
   * Node type.
   */
  type: 'enumDeclaration'
}

export type { EnumDeclarationData, EnumDeclaration as default }
