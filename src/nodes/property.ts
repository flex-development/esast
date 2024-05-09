/**
 * @file Nodes - Property
 * @module esast/nodes/Property
 */

import type { InternalComments } from '#internal'
import type {
  ArrayPattern,
  AssignmentPattern,
  Comments,
  Data,
  Expression,
  FunctionExpression,
  Identifier,
  ModifierList,
  ObjectPattern,
  Parent,
  PropertyKind
} from '@flex-development/esast'

/**
 * Info associated with object properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertyData extends Data {}

/**
 * An object property.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Property extends Parent {
  /**
   * Boolean indicating if property is an assignment property.
   */
  assignment: boolean

  /**
   * List of children.
   *
   * @see {@linkcode ArrayPattern}
   * @see {@linkcode AssignmentPattern}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionExpression}
   * @see {@linkcode Identifier}
   * @see {@linkcode ModifierList}
   * @see {@linkcode ObjectPattern}
   */
  children:
    | [
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: ArrayPattern | AssignmentPattern | Expression | ObjectPattern
    ]
    | [
      key: Expression,
      ...comments: Comments,
      value: ArrayPattern | AssignmentPattern | Expression | ObjectPattern
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [assignment: AssignmentPattern]
    | [key: Identifier]

  /**
   * Boolean indicating if property is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertyData}
   */
  data?: PropertyData | undefined

  /**
   * Property kind.
   *
   * @see {@linkcode PropertyKind}
   */
  kind: PropertyKind

  /**
   * Boolean indicating if property value is a method.
   */
  method: boolean

  /**
   * Boolean indicating if property was defined using shorthand syntax.
   */
  shorthand: boolean

  /**
   * Node type.
   */
  type: 'property'
}

export type { PropertyData, Property as default }
