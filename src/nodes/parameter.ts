/**
 * @file Nodes - Parameter
 * @module esast/nodes/Parameter
 */

import type { Data, Parent, Pattern } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with function parameters.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParameterData extends Data {}

/**
 * A function parameter.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Parameter extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Pattern}
   */
  children: [parameter: Pattern]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterData}
   */
  data?: Optional<ParameterData>

  /**
   * Node type.
   */
  type: 'parameter'
}

export type { ParameterData, Parameter as default }
