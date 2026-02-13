/**
 * @file Nodes - DefaultIdentifier
 * @module esast/nodes/DefaultIdentifier
 */

import type { Identifier } from '@flex-development/esast'

/**
 * The identifier `default`.
 *
 * @see {@linkcode Identifier}
 *
 * @extends {Identifier}
 */
interface DefaultIdentifier extends Identifier {
  /**
   * Identifier name.
   */
  name: 'default'
}

export type { DefaultIdentifier as default }
