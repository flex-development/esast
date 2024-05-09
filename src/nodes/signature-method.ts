/**
 * @file Nodes - MethodSignature
 * @module esast/nodes/MethodSignature
 */

import type { InternalComments } from '#internal'
import type {
  CallSignature,
  Comments,
  Data,
  MethodKind,
  ModifierList,
  Parent,
  TypeExpression
} from '@flex-development/esast'

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
   * @see {@linkcode CallSignature}
   * @see {@linkcode Comments}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeExpression}
   */
  children:
    | [
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      value: CallSignature
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: TypeExpression,
      ...comments: InternalComments,
      value: CallSignature
    ]
    | [name: TypeExpression, ...comments: Comments, value: CallSignature]

  /**
   * Boolean indicating if method signature name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MethodSignatureData}
   */
  data?: MethodSignatureData | undefined

  /**
   * Method signature kind.
   *
   * @see {@linkcode MethodKind}
   */
  kind: MethodKind

  /**
   * Boolean indicating if method signature is a static class method signature.
   */
  static: boolean

  /**
   * Node type.
   */
  type: 'methodSignature'
}

export type { MethodSignatureData, MethodSignature as default }
