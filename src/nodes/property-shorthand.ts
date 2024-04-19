/**
 * @file Nodes - ShorthandProperty
 * @module esast/nodes/ShorthandProperty
 */

import type {
  Identifier,
  Property,
  PropertyKind
} from '@flex-development/esast'

/**
 * A shorthand property.
 *
 * @see {@linkcode Property}
 *
 * @extends {Property}
 */
interface ShorthandProperty extends Property {
  /**
   * Boolean indicating if property is an assignment property.
   */
  assignment: false

  /**
   * List of children.
   *
   * @see {@linkcode Identifier}
   */
  children: [key: Identifier]

  /**
   * Boolean indicating if property is computed.
   */
  computed: false

  /**
   * Property kind.
   *
   * @see {@linkcode PropertyKind}
   */
  kind: Extract<PropertyKind, 'init'>

  /**
   * Boolean indicating if property value is a method.
   */
  method: false

  /**
   * Boolean indicating if property was defined using shorthand syntax.
   */
  shorthand: true
}

export type { ShorthandProperty as default }
