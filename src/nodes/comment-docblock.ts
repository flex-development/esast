/**
 * @file Nodes - DocblockComment
 * @module esast/nodes/DocblockComment
 */

import * as docast from '@flex-development/docast'
import type { CommentData } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with docblock comments.
 *
 * @see {@linkcode CommentData}
 * @see {@linkcode docast.CommentData}
 *
 * @extends {CommentData}
 * @extends {docast.CommentData}
 */
interface DocblockCommentData extends CommentData, docast.CommentData {}

/**
 * A specially formatted [comment][1] within a source file that is used to
 * document a particular segment of code.
 *
 * [1]: https://en.wikipedia.org/wiki/Comment_(computer_programming)
 *
 * @see {@linkcode docast.Comment}
 *
 * @extends {docast.Comment}
 */
interface DocblockComment extends docast.Comment {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DocblockCommentData}
   */
  data?: Optional<DocblockCommentData>
}

export type { DocblockCommentData, DocblockComment as default }
