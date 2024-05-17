/**
 * @file Nodes - AssignmentProperty
 * @module esast/nodes/AssignmentProperty
 */

import type { InternalComments } from '#internal'
import type {
  ArrayPattern,
  AssignmentExpression,
  AssignmentPattern,
  Comments,
  Expression,
  Identifier,
  ObjectPattern,
  Property,
  PropertyKind,
  PropertyName
} from '@flex-development/esast'

/**
 * An assignment property.
 *
 * @see {@linkcode Property}
 *
 * @extends {Property}
 */
interface AssignmentProperty extends Property {
  /**
   * Boolean indicating if property is an assignment property.
   */
  assignment: true

  /**
   * List of children.
   *
   * @see {@linkcode ArrayPattern}
   * @see {@linkcode AssignmentExpression}
   * @see {@linkcode AssignmentPattern}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   * @see {@linkcode ObjectPattern}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: ArrayPattern | AssignmentPattern | Identifier | ObjectPattern
    ]
    | [
      key: PropertyName,
      ...comments: Comments,
      value: ArrayPattern | AssignmentPattern | Identifier | ObjectPattern
    ]
    | [assignment: AssignmentExpression | AssignmentPattern]

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

export type { AssignmentProperty as default }
