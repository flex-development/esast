/**
 * @file Nodes - InterfaceDeclaration
 * @module esast/nodes/InterfaceDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ExtendsClause,
  Identifier,
  InterfaceBody,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `interface` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InterfaceDeclarationData extends Data {}

/**
 * An `interface` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface InterfaceDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode InterfaceBody}
   */
  children:
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: InterfaceBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: InterfaceBody
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InterfaceDeclarationData}
   */
  data?: Optional<InterfaceDeclarationData>

  /**
   * Node type.
   */
  type: 'interfaceDeclaration'
}

export type { InterfaceDeclarationData, InterfaceDeclaration as default }
