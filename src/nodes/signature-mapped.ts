/**
 * @file Nodes - MappedSignature
 * @module esast/nodes/MappedSignature
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with mapped type signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MappedSignatureData extends Data {}

/**
 * A mapped type signature.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MappedSignature extends Parent {
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
      id: Identifier,
      ...comments: InternalComments,
      mapped: TypeExpression,
      ...comments: InternalComments,
      type: TypeExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      mapped: TypeExpression,
      ...comments: InternalComments,
      type: TypeExpression
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MappedSignatureData}
   */
  data?: MappedSignatureData | undefined

  /**
   * Boolean indicating if property is marked as optional.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'mappedSignature'
}

export type { MappedSignatureData, MappedSignature as default }
