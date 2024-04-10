/**
 * @file Nodes - PropertyDefinition
 * @module esast/nodes/PropertyDefinition
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  ModifierList,
  Parent,
  TypeAnnotation
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
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: Expression,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: Expression,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      value: Expression
    ]
    | [
      name: Expression,
      ...comments: Comments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      value: Expression
    ]
    | [modifiers: ModifierList, ...comments: Comments, name: Expression]
    | [name: Expression, ...comments: Comments, type: TypeAnnotation]
    | [name: Expression]

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
   * Node type.
   */
  type: 'propertyDefinition'
}

export type { PropertyDefinitionData, PropertyDefinition as default }
