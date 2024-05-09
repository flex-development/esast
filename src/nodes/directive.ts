/**
 * @file Nodes - Directive
 * @module esast/nodes/Directive
 */

import type { Data, Literal } from '@flex-development/esast'

/**
 * Info associated with directives.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface DirectiveData extends Data {}

/**
 * A directive.
 *
 * @see {@linkcode Literal}
 *
 * @extends {Literal}
 */
interface Directive extends Literal {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DirectiveData}
   */
  data?: DirectiveData | undefined

  /**
   * Node type.
   */
  type: 'directive'

  /**
   * The parsed directive.
   */
  value: string
}

export type { DirectiveData, Directive as default }
