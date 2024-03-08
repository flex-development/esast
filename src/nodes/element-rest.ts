/**
 * @file Nodes - RestElement
 * @module esast/nodes/RestElement
 */

import type { Data, Parent, Pattern } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Pattern}
   */
  children: [argument: Pattern]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode RestElementData}
   */
  data?: Optional<RestElementData>

  /**
   * Node type.
   */
  type: 'restElement'
}

export type { RestElementData, RestElement as default }
