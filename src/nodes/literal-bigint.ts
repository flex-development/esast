/**
 * @file Nodes - BigIntLiteral
 * @module esast/nodes/BigIntLiteral
 */

import type { Literal } from '@flex-development/esast'

/**
 * A `bigint` primitive.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface BigIntLiteral extends Literal {
  /**
   * Node type.
   */
  type: 'bigint'

  /**
   * Raw value.
   */
  raw: string

  /**
   * Plain value.
   */
  value: bigint
}

export type { BigIntLiteral as default }
