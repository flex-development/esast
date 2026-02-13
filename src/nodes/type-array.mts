/**
 * @file Nodes - ArrayType
 * @module esast/nodes/ArrayType
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with array types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayTypeData extends Data {}

/**
 * An array type.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [type: TypeExpression, ...comments: Comments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayTypeData}
   */
  data?: ArrayTypeData | undefined

  /**
   * Node type.
   */
  type: 'arrayType'
}

export type { ArrayTypeData, ArrayType as default }
