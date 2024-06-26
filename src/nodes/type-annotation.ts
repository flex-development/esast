/**
 * @file Nodes - TypeAnnotation
 * @module esast/nodes/TypeAnnotation
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

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
   * @see {@linkcode TypeExpression}
   */
  children: [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypeAnnotationData}
   */
  data?: TypeAnnotationData | undefined

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

export type { TypeAnnotation as default, TypeAnnotationData }
