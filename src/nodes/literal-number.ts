/**
 * @file Nodes - NumberLiteral
 * @module esast/nodes/NumberLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A literal integer or floating point number.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NumberLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'number'

  /**
   * Plain value.
   */
  value: number
}

export type { NumberLiteral as default }
