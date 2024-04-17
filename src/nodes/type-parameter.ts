/**
 * @file Nodes - TypeParameter
 * @module esast/nodes/TypeParameter
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ExtendsClause,
  Identifier,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type parameters.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeParameterData extends Data {}

/**
 * A type parameter.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeParameter extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      fallback: TypeExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Identifier,
      ...comments: InternalComments,
      fallback: TypeExpression
    ]
    | [
      parameter: Identifier,
      ...comments: Comments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      fallback: TypeExpression
    ]
    | [modifiers: ModifierList, ...comments: Comments, parameter: Identifier]
    | [parameter: Identifier, ...comments: Comments, extend: ExtendsClause]
    | [parameter: Identifier, ...comments: Comments, fallback: TypeExpression]
    | [parameter: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeParameterData}
   */
  data?: Optional<TypeParameterData>

  /**
   * Node type.
   */
  type: 'typeParameter'
}

export type { TypeParameterData, TypeParameter as default }
