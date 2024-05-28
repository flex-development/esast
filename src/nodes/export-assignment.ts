/**
 * @file Nodes - ExportAssignment
 * @module esast/nodes/ExportAssignment
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  ExportDeclaration,
  ExportKind,
  Expression
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
  children: [
    ...comments: Comments,
    right: Expression,
    ...comments: InternalComments
  ]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'assignment'>
}

export type { ExportAssignment as default }
