/**
 * @file Nodes - ArgumentList
 * @module esast/nodes/ArgumentList
 */

import type {
  Comment,
  Data,
  Expression,
  Parent,
  SpreadElement
} from '@flex-development/esast'

/**
 * Info associated with argument lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArgumentListData extends Data {}

/**
 * Function call arguments.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArgumentList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode SpreadElement}
   */
  children: (Comment | Expression | SpreadElement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArgumentListData}
   */
  data?: ArgumentListData | undefined

  /**
   * Node type.
   */
  type: 'argumentList'
}

export type { ArgumentListData, ArgumentList as default }
