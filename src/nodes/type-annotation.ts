/**
 * @file Nodes - TypeAnnotation
 * @module esast/nodes/TypeAnnotation
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
 * Info associated with type annotations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypeAnnotationData extends Data {}

/**
 * A type annotation.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TypeAnnotation extends Parent {
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
      modifiers: ModifierList,
      ...comments: InternalComments,
      type: TypeExpression
    ]
    | [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAnnotationData}
   */
  data?: Optional<TypeAnnotationData>

  /**
   * Boolean indicating if the *definite assignment assertion operator* (`!`)
   * was used.
   */
  definite: boolean

  /**
   * Boolean indicating if an optional type is being annotated.
   */
  optional: boolean

  /**
   * Node type.
   */
  type: 'typeAnnotation'
}

export type { TypeAnnotationData, TypeAnnotation as default }
