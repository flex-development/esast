/**
 * @file Nodes - Literal
 * @module esast/nodes/Literal
 */

import type { Node } from '@flex-development/esast'

/**
 * Abstract esast node containing the smallest possible value.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Literal extends Node {
  /**
   * Plain value.
   */
  value: RegExp | bigint | boolean | number | string | null | undefined
}

export type { Literal as default }
