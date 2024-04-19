/**
 * @file Type Aliases - PropertyName
 * @module esast/types/PropertyName
 */

import type {
  Identifier,
  NumberLiteral,
  StringLiteral
} from '@flex-development/esast'

/**
 * Union of nodes representing non-computed property names.
 *
 * @see {@linkcode Identifier}
 * @see {@linkcode NumberLiteral}
 * @see {@linkcode StringLiteral}
 */
type PropertyName = Identifier | NumberLiteral | StringLiteral

export type { PropertyName as default }
