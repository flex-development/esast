/**
 * @file Nodes - AssignmentProperty
 * @module esast/nodes/AssignmentProperty
 */

import type {
  AssignmentExpression,
  AssignmentPattern,
  Comments,
  ComputedExpression,
  Expression,
  Pattern,
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
   * @see {@linkcode AssignmentExpression}
   * @see {@linkcode AssignmentPattern}
   * @see {@linkcode Comments}
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode Expression}
   * @see {@linkcode Pattern}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      key: ComputedExpression | PropertyName,
      ...comments: Comments,
      value: Pattern
    ]
    | [shorthand: AssignmentExpression | AssignmentPattern]

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
}

export type { AssignmentProperty as default }
