/**
 * @file Nodes - Property
 * @module esast/nodes/Property
 */

import type {
  AssignmentExpression,
  AssignmentPattern,
  Comments,
  ComputedExpression,
  Data,
  Expression,
  MethodDefinition,
  Parent,
  Pattern,
  PropertyKind,
  PropertyName,
  SpreadElement
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
   * @see {@linkcode AssignmentExpression}
   * @see {@linkcode AssignmentPattern}
   * @see {@linkcode Comments}
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode Expression}
   * @see {@linkcode MethodDefinition}
   * @see {@linkcode Pattern}
   * @see {@linkcode PropertyName}
   * @see {@linkcode SpreadElement}
   */
  children:
    | [
      key: ComputedExpression | PropertyName,
      ...comments: Comments,
      value: Expression | Pattern | SpreadElement
    ]
    | [assignment: AssignmentExpression | AssignmentPattern]
    | [method: MethodDefinition]
    | [shorthand: ComputedExpression | PropertyName]

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

export type { Property as default, PropertyData }
