/**
 * @file Nodes - StaticBlockBody
 * @module esast/nodes/StaticBlockBody
 */

import type { Comment, Data, Parent, Statement } from '@flex-development/esast'

/**
 * Info associated with static block bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface StaticBlockBodyData extends Data {}

/**
 * The body of a [static initialization block][1].
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface StaticBlockBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Statement}
   */
  children: (Comment | Statement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode StaticBlockBodyData}
   */
  data?: StaticBlockBodyData | undefined

  /**
   * Node type.
   */
  type: 'staticBlockBody'
}

export type { StaticBlockBody as default, StaticBlockBodyData }
