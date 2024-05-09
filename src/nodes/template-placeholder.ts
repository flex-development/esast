/**
 * @file Nodes - TemplatePlaceholder
 * @module esast/nodes/TemplatePlaceholder
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Expression,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with template literal placeholders.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplatePlaceholderData extends Data {}

/**
 * A template literal placeholder (`${expression}`).
 *
 * @see {@linkcode Parent}
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals#description
 *
 * @extends {Parent}
 */
interface TemplatePlaceholder extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode TypeExpression}
   */
  children: [
    ...comments: Comments,
    expression: Expression | TypeExpression,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplatePlaceholderData}
   */
  data?: TemplatePlaceholderData | undefined

  /**
   * Node type.
   */
  type: 'templatePlaceholder'

  /**
   * Boolean indicating placeholder expresion is a {@linkcode TypeExpression}.
   */
  typeOnly: boolean
}

export type { TemplatePlaceholderData, TemplatePlaceholder as default }
