/**
 * @file Nodes - ClassExpression
 * @module esast/nodes/ClassExpression
 */

import type {
  ClassBody,
  ClassHeritage,
  Data,
  Identifier,
  Nothing,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `class` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassExpressionData extends Data {}

/**
 * A `class` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassBody}
   * @see {@linkcode Identifier}
   * @see {@linkcode Nothing}
   */
  children: [id: Identifier | Nothing, heritage: ClassHeritage, body: ClassBody]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassExpressionData}
   */
  data?: Optional<ClassExpressionData>

  /**
   * Node type.
   */
  type: 'classExpression'
}

export type { ClassExpressionData, ClassExpression as default }
