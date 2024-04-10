/**
 * @file Nodes - PropertySignature
 * @module esast/nodes/PropertySignature
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with property signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface PropertySignatureData extends Data {}

/**
 * A property signature.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface PropertySignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      value: TypeExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      value: TypeExpression
    ]
    | [name: TypeExpression, ...comments: Comments, value: TypeExpression]

  /**
   * Boolean indicating if property name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode PropertySignatureData}
   */
  data?: Optional<PropertySignatureData>

  /**
   * Boolean indicating if property is marked as optional.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'propertySignature'
}

export type { PropertySignatureData, PropertySignature as default }
