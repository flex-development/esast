/**
 * @file Type Aliases - Comments
 * @module esast/types/Comments
 */

import type { Comment, EmptyChildren } from '@flex-development/esast'

/**
 * An array containing comment nodes, or an empty comment node array.
 *
 * @see {@linkcode Comment}
 */
type Comments = EmptyChildren | [Comment, ...Comment[]]

export type { Comments as default }
