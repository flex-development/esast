/**
 * @file Nodes - RegExpLiteral
 * @module esast/nodes/RegExpLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A regular expression.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface RegExpLiteral extends Literal {
  /**
   * Regular expression flags.
   */
  flags: string

  /**
   * Regular expression pattern.
   */
  pattern: string

  /**
   * Node type.
   */
  type: 'regexp'

  /**
   * Plain value.
   */
  value: RegExp
}

export type { RegExpLiteral as default }
