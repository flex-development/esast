/**
 * @file Nodes - MethodDefinition
 * @module esast/nodes/MethodDefinition
 */

import type {
  Data,
  Expression,
  FunctionExpression,
  Identifier,
  MethodKind,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionExpression}
   * @see {@linkcode Identifier}
   */
  children: [key: Expression | Identifier, value: FunctionExpression]

  /**
   * Boolean indicating if method is a computed property.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MethodDefinitionData}
   */
  data?: Optional<MethodDefinitionData>

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
