/**
 * @file Nodes - Parameter
 * @module esast/nodes/Parameter
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  Decorator,
  ModifierList,
  Parent,
  Pattern,
  TypeAnnotation
} from '@flex-development/esast'

/**
 * Info associated with parameters.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ParameterData extends Data {}

/**
 * A function or method parameter.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Parameter extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Pattern}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      modifiers: ModifierList,
      ...comments: InternalComments,
      parameter: Pattern
    ]
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      modifiers: ModifierList,
      ...comments: InternalComments,
      parameter: Pattern,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      parameter: Pattern,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Pattern
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Pattern,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [...([Decorator, ...(Comment | Decorator)[]]), parameter: Pattern]
    | [parameter: Pattern, ...comments: Comments, type: TypeAnnotation]
    | [parameter: Pattern]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterData}
   */
  data?: ParameterData | undefined

  /**
   * Node type.
   */
  type: 'parameter'
}

export type { ParameterData, Parameter as default }
