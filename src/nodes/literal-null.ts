/**
 * @file Nodes - NullLiteral
 * @module esast/nodes/NullLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * The value `null`.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface NullLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'null'

  /**
   * Plain value.
   */
  value: null
}

export type { NullLiteral as default }
