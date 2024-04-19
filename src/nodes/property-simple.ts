/**
 * @file Nodes - SimpleProperty
 * @module esast/nodes/SimpleProperty
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Expression,
  FunctionExpression,
  Property,
  PropertyKind,
  PropertyName
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
   * @see {@linkcode Expression}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: Exclude<Expression, FunctionExpression>
    ]
    | [
      key: PropertyName,
      ...comments: Comments,
      value: Exclude<Expression, FunctionExpression>
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
