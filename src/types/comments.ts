/**
 * @file Type Definitions - Comments
 * @module esast/types/Comments
 */

import type { Comment } from '@flex-development/esast'
import type { EmptyArray } from '@flex-development/tutils'

/**
 * An array containing comments, or an empty comment array.
 *
 * @see {@linkcode Comment}
 */
type Comments = EmptyArray | [Comment, ...Comment[]]

export type { Comments as default }
