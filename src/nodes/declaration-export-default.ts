/**
 * @file Nodes - ExportDefaultDeclaration
 * @module esast/nodes/ExportDefaultDeclaration
 */

import type {
  ClassDeclaration,
  Comment,
  Comments,
  Decorator,
  ExportDeclaration,
  ExportKind,
  Expression,
  FunctionDeclaration,
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
   * @see {@linkcode Decorator}
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Expression}
   * @see {@linkcode FunctionDeclaration}
   * @see {@linkcode ModuleDeclaration}
   */
  children:
    | [
      ...comments: Comments,
      declaration:
        | ClassDeclaration
        | Expression
        | FunctionDeclaration
        | ModuleDeclaration
    ]
    | [...(Comment | Decorator)[], declaration: ClassDeclaration]

  /**
   * Export declaration kind.
   *
   * @see {@linkcode ExportKind}
   */
  kind: Extract<ExportKind, 'default'>
}

export type { ExportDefaultDeclaration as default }
