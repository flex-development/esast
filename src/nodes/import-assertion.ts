/**
 * @file Nodes - ImportAssertion
 * @module esast/nodes/ImportAssertion
 */

import type {
  Comments,
  Data,
  ImportAssertionOperator,
  ImportAttribute,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with import assertion.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportAssertionData extends Data {}

/**
 * An import assertion (`assert { type: "json" }` or `with { type: "json" }`).
 *
 * @see {@linkcode Parent}
 * @see https://github.com/tc39/proposal-import-attributes
 * @see https://github.com/tc39/proposal-import-attributes/tree/f5ad402cd3d3f82f28b1d1be2bfd567cd26336af
 *
 * @extends {Parent}
 */
interface ImportAssertion extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ImportAttribute}
   */
  children: [...comments: Comments, attribute: ImportAttribute]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportAssertionData}
   */
  data?: ImportAssertionData | undefined

  /**
   * Import assertion operator.
   *
   * @see {@linkcode ImportAssertionOperator}
   */
  operator: ImportAssertionOperator

  /**
   * Node type.
   */
  type: 'importAssertion'
}

export type { ImportAssertionData, ImportAssertion as default }
