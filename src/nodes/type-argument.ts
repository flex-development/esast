/**
 * @file Nodes - TypeArgument
 * @module esast/nodes/TypeArgument
 */

import type {
  Comments,
  Data,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type arguments.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeArgumentData extends Data {}

/**
 * A type argument.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeArgument extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [...comments: Comments, argument: TypeExpression]
    | [modifiers: ModifierList, ...comments: Comments, argument: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeArgumentData}
   */
  data?: Optional<TypeArgumentData>

  /**
   * Node type.
   */
  type: 'typeArgument'
}

export type { TypeArgumentData, TypeArgument as default }
