/**
 * @file Type Definitions - Comment
 * @module esast/types/Comment
 */

import type {
  DocblockComment,
  MultiLineComment,
  SingleLineComment
} from '@flex-development/esast'

/**
 * A docblock, multi line, or single line comment.
 *
 * @see {@linkcode DocblockComment}
 * @see {@linkcode MultiLineComment}
 * @see {@linkcode SingleLineComment}
 */
type Comment = DocblockComment | MultiLineComment | SingleLineComment

export type { Comment as default }
