/**
 * @file Nodes - ClassExpression
 * @module esast/nodes/ClassExpression
 */

import type {
  ClassBody,
  ClassHeritage,
  Data,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'

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
   */
  children: [id: Nullable<Identifier>, heritage: ClassHeritage, body: ClassBody]

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
