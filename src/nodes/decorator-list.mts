/**
 * @file Nodes - DecoratorList
 * @module esast/nodes/DecoratorList
 */

import type {
  Comment,
  Data,
  Decorator,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with decorator lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DecoratorListData extends Data {}

/**
 * A decorator list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface DecoratorList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Decorator}
   */
  children:
    | [first: Decorator, ...middle: (Comment | Decorator)[], last: Decorator]
    | [first: Decorator]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DecoratorListData}
   */
  data?: DecoratorListData | undefined

  /**
   * Node type.
   */
  type: 'decoratorList'
}

export type { DecoratorListData, DecoratorList as default }
