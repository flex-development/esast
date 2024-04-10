/**
 * @file Nodes - Property
 * @module esast/nodes/Property
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Expression,
  ModifierList,
  Parent,
  Pattern,
  PropertyKind
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertyData extends Data {}

/**
 * A property.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Property extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode ModifierList}
   * @see {@linkcode Pattern}
   */
  children:
    | [
      key: Expression,
      ...comments: Comments,
      value: Expression | Pattern
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: Expression | Pattern
    ]

  /**
   * Boolean indicating if property is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertyData}
   */
  data?: Optional<PropertyData>

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
