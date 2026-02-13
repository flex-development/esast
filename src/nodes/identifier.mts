/**
 * @file Nodes - Identifier
 * @module esast/nodes/Identifier
 */

import type { Data, Node } from '@flex-development/esast'

/**
 * Info associated with identifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IdentifierData extends Data {}

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
  data?: IdentifierData | undefined

  /**
   * Identifier name.
   */
  name: string

  /**
   * Boolean indicating private identifier.
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Classes/Private_properties
   */
  private?: boolean | null | undefined

  /**
   * Node type.
   */
  type: 'identifier'
}

export type { IdentifierData, Identifier as default }
