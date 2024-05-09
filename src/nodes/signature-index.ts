/**
 * @file Nodes - IndexSignature
 * @module esast/nodes/IndexSignature
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  ModifierList,
  Parent,
  TypeAnnotation,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with index signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface IndexSignatureData extends Data {}

/**
 * An index signature.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface IndexSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...comments: Comments,
      name: Identifier,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      value: TypeExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: Identifier,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      value: TypeExpression
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode IndexSignatureData}
   */
  data?: IndexSignatureData | undefined

  /**
   * Node type.
   */
  type: 'indexSignature'
}

export type { IndexSignatureData, IndexSignature as default }
