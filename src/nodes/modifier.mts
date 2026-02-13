/**
 * @file Nodes - Modifier
 * @module esast/nodes/Modifier
 */

import type { Literal, ModifierValue } from '@flex-development/esast'

/**
 * A modifier keyword or punctuator.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Modifier extends Literal {
  /**
   * Node type.
   */
  type: 'modifier'

  /**
   * Modifier value.
   *
   * @see {@linkcode ModifierValue}
   */
  value: ModifierValue
}

export type { Modifier as default }
