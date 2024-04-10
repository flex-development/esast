/**
 * @file Nodes - CallSignature
 * @module esast/nodes/CallSignature
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  ModifierList,
  ParameterList,
  Parent,
  TypeAnnotation,
  TypeParameterList
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with call signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CallSignatureData extends Data {}

/**
 * A call signature.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures
 *
 * @extends {Parent}
 */
interface CallSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode ParameterList}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      typeParams: TypeParameterList,
      ...comments: Comments,
      params: ParameterList
    ]
    | [
      typeParams: TypeParameterList,
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [modifiers: ModifierList, ...comments: Comments, params: ParameterList]
    | [params: ParameterList, ...comments: Comments, returnType: TypeAnnotation]
    | [params: ParameterList]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CallSignatureData}
   */
  data?: Optional<CallSignatureData>

  /**
   * Node type.
   */
  type: 'callSignature'
}

export type { CallSignatureData, CallSignature as default }
