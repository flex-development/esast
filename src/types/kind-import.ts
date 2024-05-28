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
  | 'default+named'
  | 'default+namespace'
  | 'effect'
  | 'named'
  | 'namespace'

export type { ImportKind as default }
