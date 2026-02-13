/**
 * @file Nodes - BooleanLiteral
 * @module esast/nodes/BooleanLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A boolean value.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface BooleanLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'boolean'

  /**
   * Plain value.
   */
  value: boolean
}

export type { BooleanLiteral as default }
