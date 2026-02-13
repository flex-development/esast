/**
 * @file Nodes - RestType
 * @module esast/nodes/RestType
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with rest types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RestTypeData extends Data {}

/**
 * A rest (`...`) type.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface RestType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RestTypeData}
   */
  data?: RestTypeData | undefined

  /**
   * Node type.
   */
  type: 'restType'
}

export type { RestTypeData, RestType as default }
