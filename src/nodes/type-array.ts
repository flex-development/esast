/**
 * @file Nodes - ArrayType
 * @module esast/nodes/ArrayType
 */

import type { Comments, Data, Parent,
  TypeExpression } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
  data?: Optional<ArrayTypeData>

  /**
   * Node type.
   */
  type: 'arrayType'
}

export type { ArrayTypeData, ArrayType as default }
