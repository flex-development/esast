/**
 * @file Nodes - UndefinedLiteral
 * @module esast/nodes/UndefinedLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * The value `undefined`.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface UndefinedLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'undefined'

  /**
   * Plain value.
   */
  value: undefined
}

export type { UndefinedLiteral as default }
