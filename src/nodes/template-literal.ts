/**
 * @file Nodes - TemplateLiteral
 * @module esast/nodes/TemplateLiteral
 */

import type {
  Data,
  Parent,
  TemplateElement,
  TemplatePlaceholder
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
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals
 *
 * @extends {Parent}
 */
interface TemplateLiteral extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode TemplateElement}
   * @see {@linkcode TemplatePlaceholder}
   */
  children: (TemplateElement | TemplatePlaceholder)[]

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
