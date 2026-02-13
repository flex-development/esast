/**
 * @file Nodes - ImportIdentifier
 * @module esast/nodes/ImportIdentifier
 */

import type { Identifier } from '@flex-development/esast'

/**
 * The identifier `import`.
 *
 * @see {@linkcode Identifier}
 *
 * @extends {Identifier}
 */
interface ImportIdentifier extends Identifier {
  /**
   * Identifier name.
   */
  name: 'import'
}

export type { ImportIdentifier as default }
