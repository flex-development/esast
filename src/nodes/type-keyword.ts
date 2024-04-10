/**
 * @file Nodes - TypeKeyword
 * @module esast/nodes/TypeKeyword
 */

import type { Literal, TypeKeywordValue } from '@flex-development/esast'

/**
 * A type keyword.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TypeKeyword extends Literal {
  /**
   * Node type.
   */
  type: 'typeKeyword'

  /**
   * The type keyword.
   *
   * @see {@linkcode TypeKeywordValue}
   */
  value: TypeKeywordValue
}

export type { TypeKeyword as default }
