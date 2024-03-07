/**
 * @file Nodes - Literal
 * @module esast/nodes/Literal
 */

import type { Node } from '@flex-development/esast'
import type { JsonPrimitive, Optional } from '@flex-development/tutils'

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
   *
   * @see {@linkcode JsonPrimitive}
   */
  value: Optional<JsonPrimitive | RegExp | bigint>
}

export type { Literal as default }
