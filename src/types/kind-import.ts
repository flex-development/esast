/**
 * @file Type Aliases - ImportKind
 * @module esast/types/ImportKind
 */

/**
 * Import declaration kinds.
 */
type ImportKind =
  | 'assignment'
  | 'default'
  | 'effect'
  | 'named'
  | 'namespace'

export type { ImportKind as default }
