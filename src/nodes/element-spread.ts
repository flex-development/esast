/**
 * @file Nodes - SpreadElement
 * @module esast/nodes/SpreadElement
 */

import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with spreads.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface SpreadElementData extends Data {}

/**
 * Spread (`...`) syntax.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface SpreadElement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   *
   * @see {@linkcode Expression}
   */
  children: [...comments: Comments, argument: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SpreadElementData}
   */
  data?: SpreadElementData | undefined

  /**
   * Node type.
   */
  type: 'spreadElement'
}

export type { SpreadElementData, SpreadElement as default }
