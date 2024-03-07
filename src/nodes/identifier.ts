/**
 * @file Nodes - Identifier
 * @module esast/nodes/Identifier
 */

import type { Data, Node } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with identifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IdentifierData extends Data {
  /**
   * Private identifier?
   */
  private?: Nilable<boolean>
}

/**
 * An identifier.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface Identifier extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IdentifierData}
   */
  data?: Optional<IdentifierData>

  /**
   * Identifier name.
   */
  name: string

  /**
   * Node type.
   */
  type: 'identifier'
}

export type { IdentifierData, Identifier as default }
