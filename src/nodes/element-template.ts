/**
 * @file Nodes - TemplateElement
 * @module esast/nodes/TemplateElement
 */

import type { Data, Literal } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

/**
 * Info associated with template literal elements.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TemplateElementData extends Data {
  /**
   * Processed template element value.
   *
   * This should be `null` or `undefined` when a template literal is tagged and
   * contains an invalid escape sequence.
   */
  cooked?: Nilable<string>
}

/**
 * A template literal element.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface TemplateElement extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TemplateElementData}
   */
  data?: Optional<TemplateElementData>

  /**
   * Boolean indicating last template element in template literal.
   */
  tail: boolean

  /**
   * Node type.
   */
  type: 'templateElement'

  /**
   * Raw template element value.
   */
  value: string
}

export type { TemplateElementData, TemplateElement as default }
