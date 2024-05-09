/**
 * @file Nodes - MethodDefinition
 * @module esast/nodes/MethodDefinition
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  FunctionExpression,
  MethodKind,
  ModifierList,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with method definitions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MethodDefinitionData extends Data {}

/**
 * A method definition.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface MethodDefinition extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionExpression}
   * @see {@linkcode ModifierList}
   */
  children:
    | [
      ...comments: Comments,
      name: Expression,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: Expression,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [name: Expression, ...comments: Comments, value: FunctionExpression]

  /**
   * Boolean indicating if method name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MethodDefinitionData}
   */
  data?: MethodDefinitionData | undefined

  /**
   * Method kind.
   *
   * @see {@linkcode MethodKind}
   */
  kind: MethodKind

  /**
   * Boolean indicating if method is a static class method.
   */
  static: boolean

  /**
   * Node type.
   */
  type: 'methodDefinition'
}

export type { MethodDefinitionData, MethodDefinition as default }
