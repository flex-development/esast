/**
 * @file Nodes - ImportAttributeClause
 * @module esast/nodes/ImportAttributeClause
 */

import type {
  Comments,
  Data,
  ImportAttribute,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with import attribute clauses.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportAttributeClauseData extends Data {}

/**
 * An import attribute clause (`with { type: "json" }`).
 *
 * @see {@linkcode Parent}
 * @see https://github.com/tc39/proposal-import-attributes
 *
 * @extends {Parent}
 */
interface ImportAttributeClause extends Parent {
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
   * @see {@linkcode ImportAttributeClauseData}
   */
  data?: ImportAttributeClauseData | undefined

  /**
   * Node type.
   */
  type: 'importAttributeClause'
}

export type { ImportAttributeClauseData, ImportAttributeClause as default }
