/**
 * @file Nodes - FunctionDeclaration
 * @module esast/nodes/FunctionDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  BlockStatement,
  Comment,
  Comments,
  Data,
  Identifier,
  ParameterList,
  Parent
} from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with function declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionDeclarationData extends Data {
  /**
   * Asynchronous function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function
   */
  async?: Nilable<boolean>

  /**
   * Generator function?
   *
   * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function*
   */
  generator?: Nilable<boolean>
}

/**
 * A `function` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode BlockStatement}
   * @see {@linkcode Comment}
   * @see {@linkcode Identifier}
   * @see {@linkcode ParameterList}
   */
  children: [
    ...comments: Comments,
    id: Identifier,
    ...comments: InternalComments,
    params: ParameterList,
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
   * Node type.
   */
  type: 'functionDeclaration'
}

export type { FunctionDeclarationData, FunctionDeclaration as default }
