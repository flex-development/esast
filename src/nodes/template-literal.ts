/**
 * @file Nodes - TemplateLiteral
 * @module esast/nodes/TemplateLiteral
 */

import type {
  Data,
  Expression,
  Parent,
  TemplateElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with template literals.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplateLiteralData extends Data {}

/**
 * A template literal.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface TemplateLiteral extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode TemplateElement}
   */
  children: (Expression | TemplateElement)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplateLiteralData}
   */
  data?: Optional<TemplateLiteralData>

  /**
   * Node type.
   */
  type: 'templateLiteral'
}

export type { TemplateLiteralData, TemplateLiteral as default }
