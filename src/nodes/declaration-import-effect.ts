/**
 * @file Nodes - ImportEffectDeclaration
 * @module esast/nodes/ImportEffectDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Identifier,
  ImportAssertion,
  ImportDeclaration,
  ImportKind,
  StringLiteral
} from '@flex-development/esast'

/**
 * A side-effect `import` declaration.
 *
 * @see {@linkcode ImportDeclaration}
 *
 * @extends {ImportDeclaration}
 */
interface ImportEffectDeclaration extends ImportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImportAssertion}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments
    ]
    | [
      ...comments: Comments,
      source: Identifier | StringLiteral,
      ...comments: InternalComments,
      attributes: ImportAssertion,
      ...comments: InternalComments
    ]

  /**
   * Import declaration kind.
   *
   * @see {@linkcode ImportKind}
   */
  kind: Extract<ImportKind, 'effect'>
}

export type { ImportEffectDeclaration as default }
