/**
 * @file Nodes - ImportAssignment
 * @module esast/nodes/ImportAssignment
 */

import type { InternalComments } from '#internal'
import type {
  CallExpression,
  Comments,
  ImportDeclaration,
  ImportExportKind,
  ImportSpecifiers
} from '@flex-development/esast'

/**
 * An `import` assignment (`import x = require('module-name')`).
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportAssignment extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode CallExpression}
   * @see {@linkcode Comments}
   * @see {@linkcode ImportSpecifiers}
   */
  children: [
    ...comments: Comments,
    left: ImportSpecifiers,
    ...comments: InternalComments,
    right: CallExpression
  ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportExportKind}
   */
  kind: Extract<ImportExportKind, 'assignment'>
}

export type { ImportAssignment as default }
