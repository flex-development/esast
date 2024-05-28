/**
 * @file Nodes - FunctionLike
 * @module esast/nodes/FunctionLike
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comments,
  Identifier,
  ParameterList,
  Parent,
  TypeAnnotation,
  TypeParameterList
} from '@flex-development/esast'

/**
 * A `function` declaration or expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionLike extends Parent {
  /**
   * Asynchronous function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/async_function
   */
  async: boolean

  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ParameterList}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      body: BlockStatement
    ]
    | [
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation,
      ...comments: InternalComments,
      body: BlockStatement
    ]

  /**
   * Generator function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/function*
   */
  generator: boolean

  /**
   * Node type.
   */
  type: `function${'Declaration' | 'Expression'}`
}

export type { FunctionLike as default }
