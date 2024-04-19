/**
 * @file Nodes - MethodProperty
 * @module esast/nodes/MethodProperty
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Expression,
  FunctionExpression,
  ModifierList,
  Property,
  PropertyName
} from '@flex-development/esast'

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
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionExpression}
   * @see {@linkcode PropertyName}
   * @see {@linkcode ModifierList}
   */
  children:
    | [
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [key: PropertyName, ...comments: Comments, value: FunctionExpression]

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
