/**
 * @file Nodes - ImportAssignment
 * @module esast/nodes/ImportAssignment
 */

import type { InternalComments } from '#internal'
import type {
  CallExpression,
  Comments,
  Identifier,
  ImportAssertion,
  ImportDeclaration,
  ImportKind
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
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   */
  children:
    | [
      ...comments: Comments,
      left: Identifier,
      ...comments: InternalComments,
      right: CallExpression,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      left: Identifier,
      ...comments: InternalComments,
      right: CallExpression,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: Extract<ImportKind, 'assignment'>
}

export type { ImportAssignment as default }
