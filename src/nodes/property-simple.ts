/**
 * @file Nodes - SimpleProperty
 * @module esast/nodes/SimpleProperty
 */

import type {
  Comments,
  ComputedExpression,
  Expression,
  Property,
  PropertyKind,
  PropertyName,
  SpreadElement
} from '@flex-development/esast'

/**
 * An object expression property.
 *
 * @see {@linkcode Property}
 *
 * @extends {Property}
 */
interface SimpleProperty extends Property {
  /**
   * Boolean indicating if property is an assignment property.
   */
  assignment: false

  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode Expression}
   * @see {@linkcode PropertyName}
   * @see {@linkcode SpreadElement}
   */
  children: [
    key: ComputedExpression | PropertyName,
    ...comments: Comments,
    value: Expression | SpreadElement
  ]

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
  shorthand: false
}

export type { SimpleProperty as default }
