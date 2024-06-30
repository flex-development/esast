/**
 * @file Nodes - NumberLiteral
 * @module esast/nodes/NumberLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A number.
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
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: number
}

export type { NumberLiteral as default }
