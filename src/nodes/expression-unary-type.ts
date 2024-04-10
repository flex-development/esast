/**
 * @file Nodes - UnaryTypeExpression
 * @module esast/nodes/UnaryTypeExpression
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression,
  UnaryTypeOperator
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with unary type expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnaryTypeExpressionData extends Data {}

/**
 * A unary type expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface UnaryTypeExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [...comments: Comments, type: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnaryTypeExpressionData}
   */
  data?: Optional<UnaryTypeExpressionData>

  /**
   * Unary type operator.
   *
   * @see {@linkcode UnaryTypeOperator}
   */
  operator: UnaryTypeOperator

  /**
   * Node type.
   */
  type: 'unaryTypeExpression'
}

export type { UnaryTypeExpressionData, UnaryTypeExpression as default }
