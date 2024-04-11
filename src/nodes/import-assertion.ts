/**
 * @file Nodes - ImportAssertion
 * @module esast/nodes/ImportAssertion
 */

import type {
  Comments,
  Data,
  ImportAttribute,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with import assertion.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportAssertionData extends Data {}

/**
 * An import assertion (`assert { type: "json" }`).
 *
 * @see {@linkcode Parent}
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
  data?: Optional<ImportAssertionData>

  /**
   * Node type.
   */
  type: 'importAssertion'
}

export type { ImportAssertionData, ImportAssertion as default }