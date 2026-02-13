/**
 * @file Nodes - Decorator
 * @module esast/nodes/Decorator
 */

import type {
  Comments,
  Data,
  Expression,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with decorators.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DecoratorData extends Data {}

/**
 * A decorator.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Decorator extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [...comments: Comments, expression: Expression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DecoratorData}
   */
  data?: DecoratorData | undefined

  /**
   * Node type.
   */
  type: 'decorator'
}

export type { DecoratorData, Decorator as default }
