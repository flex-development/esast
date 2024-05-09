/**
 * @file Nodes - ImportSpecifier
 * @module esast/nodes/ImportSpecifier
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'

/**
 * Info associated with import specifiers.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportSpecifierData extends Data {
  /**
   * Type-only import?
   *
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export
   */
  typeOnly?: boolean | null | undefined
}

/**
 * An `import` specifier.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportSpecifier extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode StringLiteral}
   */
  children:
    | [
      ...comments: Comments,
      imported: Identifier | StringLiteral,
      ...comments: InternalComments,
      local: Identifier
    ]
    | [...comments: Comments, local: Identifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportSpecifierData}
   */
  data?: ImportSpecifierData | undefined

  /**
   * Node type.
   */
  type: 'importSpecifier'
}

export type { ImportSpecifierData, ImportSpecifier as default }
