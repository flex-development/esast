/**
 * @file Nodes - StringLiteral
 * @module esast/nodes/StringLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A string.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface StringLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'string'

  /**
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: string
}

export type { StringLiteral as default }
