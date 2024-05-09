/**
 * @file Nodes - TypeAliasDeclaration
 * @module esast/nodes/TypeAliasDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  Parent,
  TypeExpression,
  TypeParameterList
} from '@flex-development/esast'

/**
 * Info associated with `type` alias declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeAliasDeclarationData extends Data {}

/**
 * A `type` alias declaration.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
 *
 * @extends {Parent}
 */
interface TypeAliasDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeExpression}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: TypeExpression
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      params: TypeParameterList,
      ...comments: InternalComments,
      body: TypeExpression
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAliasDeclarationData}
   */
  data?: TypeAliasDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'typeAliasDeclaration'
}

export type { TypeAliasDeclarationData, TypeAliasDeclaration as default }
