/**
 * @file Nodes - ModuleExpression
 * @module esast/nodes/ModuleExpression
 */

import type {
  Comments,
  Data,
  ModuleBody,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with module expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ModuleExpressionData extends Data {}

/**
 * A module expression.
 *
 * @see {@linkcode Parent}
 * @see https://github.com/tc39/proposal-module-expressions
 *
 * @extends {Parent}
 */
interface ModuleExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ModuleBody}
   */
  children: [...comments: Comments, body: ModuleBody]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ModuleExpressionData}
   */
  data?: Optional<ModuleExpressionData>

  /**
   * Node type.
   */
  type: 'moduleExpression'
}

export type { ModuleExpressionData, ModuleExpression as default }
