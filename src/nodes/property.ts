/**
 * @file Nodes - Property
 * @module esast/nodes/Property
 */

import type {
  Data,
  Expression,
  Identifier,
  Parent,
  Pattern,
  PropertyKind
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertyData extends Data {
  /**
   * Assignment property?
   */
  assignment?: Nilable<boolean>
}

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
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   * @see {@linkcode Pattern}
   */
  children: [key: Expression | Identifier, value: Expression | Pattern]

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
