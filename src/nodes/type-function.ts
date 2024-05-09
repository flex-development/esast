/**
 * @file Nodes - FunctionType
 * @module esast/nodes/FunctionType
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  ParameterList,
  Parent,
  TypeArgumentList,
  TypeExpression,
  TypeParameterList
} from '@flex-development/esast'

/**
 * Info associated with function type expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionTypeData extends Data {}

/**
 * A function type expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FunctionType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode TypeArgumentList}
   */
  children:
    | [
      typeParams: TypeParameterList,
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeExpression
    ]
    | [params: ParameterList, ...comments: Comments, returnType: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionTypeData}
   */
  data?: FunctionTypeData | undefined

  /**
   * Node type.
   */
  type: 'functionType'
}

export type { FunctionTypeData, FunctionType as default }
