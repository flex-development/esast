/**
 * @file Nodes - ExportAssignment
 * @module esast/nodes/ExportAssignment
 */

import type {
  Comments,
  ExportDeclaration,
  Expression,
  ImportExportKind
} from '@flex-development/esast'

/**
 * An `export` assignment (`export =`).
 *
 * @see {@linkcode ExportDeclaration}
 *
 * @extends {ExportDeclaration}
 */
interface ExportAssignment extends ExportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   */
  children: [...comments: Comments, right: Expression]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ImportExportKind}
   */
  kind: Extract<ImportExportKind, 'assignment'>
}

export type { ExportAssignment as default }
