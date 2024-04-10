/**
 * @file Nodes - ClassExpression
 * @module esast/nodes/ClassExpression
 */

import type { InternalComments } from '#internal'
import type {
  ClassBody,
  ClassHeritage,
  Comment,
  Comments,
  Data,
  Identifier,
  Parent,
  TypeParameterList
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `class` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassExpressionData extends Data {}

/**
 * A `class` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassBody}
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [...comments: Comments, body: ClassBody]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassExpressionData}
   */
  data?: Optional<ClassExpressionData>

  /**
   * Node type.
   */
  type: 'classExpression'
}

export type { ClassExpressionData, ClassExpression as default }
