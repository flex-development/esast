/**
 * @file Nodes - StringLiteral
 * @module esast/nodes/StringLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A literal string value.
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
   * Plain value.
   */
  value: string
}

export type { StringLiteral as default }
