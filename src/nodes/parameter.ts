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
  This,
  TypeAnnotation
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode This}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      modifiers: ModifierList,
      ...comments: InternalComments,
      parameter: Pattern | This
    ]
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      modifiers: ModifierList,
      ...comments: InternalComments,
      parameter: Pattern | This,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [
      ...([Decorator, ...(Comment | Decorator)[]]),
      parameter: Pattern | This,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Pattern | This
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      parameter: Pattern | This,
      ...comments: InternalComments,
      type: TypeAnnotation
    ]
    | [...([Decorator, ...(Comment | Decorator)[]]), parameter: Pattern | This]
    | [parameter: Pattern | This, ...comments: Comments, type: TypeAnnotation]
    | [parameter: Pattern | This]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ParameterData}
   */
  data?: Optional<ParameterData>

  /**
   * Node type.
   */
  type: 'parameter'
}

export type { ParameterData, Parameter as default }
