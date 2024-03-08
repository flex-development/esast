/**
 * @file Nodes - PropertyDefinition
 * @module esast/nodes/PropertyDefinition
 */

import type {
  Data,
  Expression,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with property definitions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertyDefinitionData extends Data {}

/**
 * A property definition.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface PropertyDefinition extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   */
  children:
    | [key: Expression | Identifier, value: Expression]
    | [key: Expression | Identifier]

  /**
   * Boolean indicating if property name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertyDefinitionData}
   */
  data?: Optional<PropertyDefinitionData>

  /**
   * Boolean indicating if property is static.
   */
  static: boolean

  /**
   * Node type.
   */
  type: 'propertyDefinition'
}

export type { PropertyDefinitionData, PropertyDefinition as default }
