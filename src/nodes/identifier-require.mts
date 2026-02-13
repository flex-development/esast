/**
 * @file Nodes - RequireIdentifier
 * @module esast/nodes/RequireIdentifier
 */

import type { Identifier } from '@flex-development/esast'

/**
 * The identifier `require`.
 *
 * @see {@linkcode Identifier}
 *
 * @extends {Identifier}
 */
interface RequireIdentifier extends Identifier {
  /**
   * Identifier name.
   */
  name: 'require'
}

export type { RequireIdentifier as default }
