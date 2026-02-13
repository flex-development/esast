/**
 * @file Nodes - MethodProperty
 * @module esast/nodes/MethodProperty
 */

import type { MethodDefinition, Property } from '@flex-development/esast'

/**
 * A method property.
 *
 * @see {@linkcode Property}
 *
 * @extends {Property}
 */
interface MethodProperty extends Property {
  /**
   * Boolean indicating if property is an assignment property.
   */
  assignment: false

  /**
   * List of children.
   *
   * @see {@linkcode MethodDefinition}
   */
  children: [MethodDefinition]

  /**
   * Boolean indicating if property value is a method.
   */
  method: true

  /**
   * Boolean indicating if property was defined using shorthand syntax.
   */
  shorthand: false
}

export type { MethodProperty as default }
