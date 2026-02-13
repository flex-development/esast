/**
 * @file Nodes - ShorthandProperty
 * @module esast/nodes/ShorthandProperty
 */

import type {
  ComputedExpression,
  Property,
  PropertyKind,
  PropertyName
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
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode PropertyName}
   */
  children: [shorthand: ComputedExpression | PropertyName]

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
