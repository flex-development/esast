/**
 * @file Nodes - FunctionDeclaration
 * @module esast/nodes/FunctionDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comments,
  Data,
  Identifier,
  ParameterList,
  Parent,
  TypeAnnotation,
  TypeParameterList
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with function declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionDeclarationData extends Data {}

/**
 * A `function` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionDeclaration extends Parent {
  /**
   * Asynchronous function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
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

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionDeclarationData}
   */
  data?: Optional<FunctionDeclarationData>

  /**
   * Generator function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*
   */
  generator: boolean

  /**
   * Node type.
   */
  type: 'functionDeclaration'
}

export type { FunctionDeclarationData, FunctionDeclaration as default }
