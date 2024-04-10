/**
 * @file Nodes - ConstructorType
 * @module esast/nodes/ConstructorType
 */

import type {
  Comments,
  Data,
  FunctionType,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with constructor types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ConstructorTypeData extends Data {}

/**
 * A constructor type (`new () => Base`).
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ConstructorType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode FunctionType}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...comments: Comments,
      construct: Exclude<TypeExpression, Pick<FunctionType, 'type'>>
    ]
    | [...comments: Comments, construct: FunctionType]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ConstructorTypeData}
   */
  data?: Optional<ConstructorTypeData>

  /**
   * Node type.
   */
  type: 'constructorType'
}

export type { ConstructorTypeData, ConstructorType as default }
