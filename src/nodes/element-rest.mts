/**
 * @file Nodes - RestElement
 * @module esast/nodes/RestElement
 */

import type { Comments, Data, Parent, Pattern } from '@flex-development/esast'

/**
 * Info associated with rest parameters and properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface RestElementData extends Data {}

/**
 * Rest (`...`) parameter or property syntax.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface RestElement extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   *
   * @see {@linkcode Pattern}
   */
  children: [...comments: Comments, argument: Pattern]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RestElementData}
   */
  data?: RestElementData | undefined

  /**
   * Node type.
   */
  type: 'restElement'
}

export type { RestElementData, RestElement as default }
