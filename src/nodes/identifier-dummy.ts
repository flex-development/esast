/**
 * @file Nodes - DummyIdentifier
 * @module esast/nodes/DummyIdentifier
 */

import type { Identifier } from '@flex-development/esast'

/**
 * A dummy identifier.
 *
 * @see {@linkcode Identifier}
 *
 * @extends {Identifier}
 */
interface DummyIdentifier extends Identifier {
  /**
   * Identifier name.
   */
  name: '✖'
}

export type { DummyIdentifier as default }
