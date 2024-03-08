/**
 * @file Nodes - ParameterList
 * @module esast/nodes/ParameterList
 */

import type { Comment, Data, Parent, Pattern } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with parameter lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParameterListData extends Data {}

/**
 * A parameter list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ParameterList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Pattern}
   */
  children: (Comment | Pattern)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterListData}
   */
  data?: Optional<ParameterListData>

  /**
   * Node type.
   */
  type: 'parameterList'
}

export type { ParameterListData, ParameterList as default }
