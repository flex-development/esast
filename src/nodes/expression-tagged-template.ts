/**
 * @file Nodes - TaggedTemplateExpression
 * @module esast/nodes/TaggedTemplateExpression
 */

import type {
  Comment,
  Comments,
  Data,
  Expression,
  Parent,
  TemplateLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with tagged template expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TaggedTemplateExpressionData extends Data {}

/**
 * A tagged template expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TaggedTemplateExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode TemplateLiteral}
   */
  children: [tag: Expression, ...comments: Comments, quasi: TemplateLiteral]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TaggedTemplateExpressionData}
   */
  data?: Optional<TaggedTemplateExpressionData>

  /**
   * Node type.
   */
  type: 'taggedTemplateExpression'
}

export type {
  TaggedTemplateExpressionData,
  TaggedTemplateExpression as default
}
