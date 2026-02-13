/**
 * @file Nodes - ModuleBody
 * @module esast/nodes/ModuleBody
 */

import type {
  Comment,
  Data,
  Directive,
  Parent,
  Statement
} from '@flex-development/esast'

/**
 * Info associated with module declaration bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ModuleBodyData extends Data {}

/**
 * A module declaration body.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ModuleBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Directive}
   * @see {@linkcode Statement}
   */
  children: (Comment | Directive | Statement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ModuleBodyData}
   */
  data?: ModuleBodyData | undefined

  /**
   * Node type.
   */
  type: 'moduleBody'
}

export type { ModuleBodyData, ModuleBody as default }
