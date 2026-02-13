/**
 * @file Nodes - MetaIdentifier
 * @module esast/nodes/MetaIdentifier
 */

import type { Identifier } from '@flex-development/esast'

/**
 * The identifier `meta`.
 *
 * @see {@linkcode Identifier}
 *
 * @extends {Identifier}
 */
interface MetaIdentifier extends Identifier {
  /**
   * Identifier name.
   */
  name: 'meta'
}

export type { MetaIdentifier as default }
