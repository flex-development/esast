/**
 * @file Nodes - ImportAttribute
 * @module esast/nodes/ImportAttribute
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with import attributes.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportAttributeData extends Data {}

/**
 * An import attribute.
 *
 * @see {@linkcode Parent}
 * @see https://github.com/tc39/proposal-import-attributes
 *
 * @extends {Parent}
 */
interface ImportAttribute extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children: [
    ...comments: Comments,
    key: Identifier | StringLiteral,
    ...comments: InternalComments,
    value: StringLiteral,
    ...comments: InternalComments
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportAttributeData}
   */
  data?: Optional<ImportAttributeData>

  /**
   * Node type.
   */
  type: 'importAttribute'
}

export type { ImportAttributeData, ImportAttribute as default }
