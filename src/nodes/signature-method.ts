/**
 * @file Nodes - MethodSignature
 * @module esast/nodes/MethodSignature
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  MethodKind,
  ModifierList,
  ParameterList,
  Parent,
  TypeAnnotation,
  TypeExpression,
  TypeParameterList
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with method signatures.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MethodSignatureData extends Data {}

/**
 * A method signature.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MethodSignature extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode ParameterList}
   * @see {@linkcode TypeAnnotation}
   * @see {@linkcode TypeExpression}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      name: TypeExpression,
      ...comments: Comments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [
      name: TypeExpression,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList
    ]
    | [
      name: TypeExpression,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      params: ParameterList,
      ...comments: InternalComments,
      returnType: TypeAnnotation
    ]
    | [name: TypeExpression, ...comments: Comments, params: ParameterList]

  /**
   * Boolean indicating if method name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MethodSignatureData}
   */
  data?: Optional<MethodSignatureData>

  /**
   * Method signature kind.
   *
   * @see {@linkcode MethodKind}
   */
  kind: MethodKind

  /**
   * Node type.
   */
  type: 'methodSignature'
}

export type { MethodSignatureData, MethodSignature as default }
