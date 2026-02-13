/**
 * @file Nodes - ArrayPattern
 * @module esast/nodes/ArrayPattern
 */

import type {
  Comment,
  Data,
  Expression,
  Nothing,
  Parent,
  Pattern
} from '@flex-development/esast'

/**
 * Info associated with array patterns.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ArrayPatternData extends Data {}

/**
 * An array pattern.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ArrayPattern extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode Nothing}
   * @see {@linkcode Pattern}
   */
  children: (Comment | Expression | Nothing | Pattern)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ArrayPatternData}
   */
  data?: ArrayPatternData | undefined

  /**
   * Node type.
   */
  type: 'arrayPattern'
}

export type { ArrayPatternData, ArrayPattern as default }
