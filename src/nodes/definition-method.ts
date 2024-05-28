/**
 * @file Nodes - MethodDefinition
 * @module esast/nodes/MethodDefinition
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  ComputedExpression,
  Data,
  DecoratorList,
  FunctionExpression,
  MethodKind,
  ModifierList,
  Parent,
  PropertyName
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
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode DecoratorList}
   * @see {@linkcode FunctionExpression}
   * @see {@linkcode ModifierList}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      value: FunctionExpression
    ]
    | [
      name: ComputedExpression | PropertyName,
      ...comments: Comments,
      value: FunctionExpression
    ]

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

export type { MethodDefinition as default, MethodDefinitionData }
