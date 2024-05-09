/**
 * @file Nodes - ParameterList
 * @module esast/nodes/ParameterList
 */

import type {
  Comment,
  Data,
  Parameter,
  Parent
} from '@flex-development/esast'

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
   * @see {@linkcode Parameter}
   */
  children: (Comment | Parameter)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterListData}
   */
  data?: ParameterListData | undefined

  /**
   * Node type.
   */
  type: 'parameterList'
}

export type { ParameterListData, ParameterList as default }
