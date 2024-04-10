/**
 * @file Nodes - FunctionSignature
 * @module esast/nodes/FunctionSignature
 */

import type { InternalComments } from '#internal'
import type {
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
 * Info associated with `function` overload signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FunctionSignatureData extends Data {}

/**
 * A `function` overload signature.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
 *
 * @extends {Parent}
 */
interface FunctionSignature extends Parent {
  /**
   * List of children.
   *
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
      params: ParameterList
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FunctionSignatureData}
   */
  data?: Optional<FunctionSignatureData>

  /**
   * Node type.
   */
  type: 'functionSignature'
}

export type { FunctionSignatureData, FunctionSignature as default }
