/**
 * @file Nodes - ExportDefaultDeclaration
 * @module esast/nodes/ExportDefaultDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassDeclaration,
  Comments,
  ExportDeclaration,
  ExportKind,
  Expression,
  FunctionDeclaration,
  FunctionSignature,
  ModuleDeclaration
} from '@flex-development/esast'

/**
 * A default `export` declaration.
 *
 * @see {@linkcode ExportDeclaration}
 *
 * @extends {ExportDeclaration}
 */
interface ExportDefaultDeclaration extends ExportDeclaration {
  /**
   * List of children.
   *
   * @see {@linkcode ClassDeclaration}
   * @see {@linkcode Comments}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionDeclaration}
   * @see {@linkcode FunctionSignature}
   * @see {@linkcode ModuleDeclaration}
   */
  children:
    | [
      ...comments: Comments,
      declaration:
        | ClassDeclaration
        | FunctionDeclaration
        | FunctionSignature
        | ModuleDeclaration
    ]
    | [
      ...comments: Comments,
      declaration: Expression,
      ...comments: InternalComments
    ]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'default'>
}

export type { ExportDefaultDeclaration as default }
