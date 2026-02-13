/**
 * @file Nodes - BlockComment
 * @module esast/nodes/BlockComment
 */

import * as docast from '@flex-development/docast'
import type { Comment, CommentData, CommentKind } from '@flex-development/esast'

/**
 * Info associated with block comments.
 *
 * @see {@linkcode CommentData}
 *
 * @extends {CommentData}
 */
interface BlockCommentData extends CommentData {
  /**
   * Leading comment?
   *
   * Leading comments start and end on the same `start` line as the node they
   * precede.
   */
  leading?: boolean | null | undefined

  /**
   * Trailing comment?
   *
   * Trailing comments start and end on the same `end` line as the node they
   * succeed.
   */
  trailing?: boolean | null | undefined
}

/**
 * A block comment.
 *
 * @see {@linkcode Comment}
 *
 * @extends {Comment}
 */
interface BlockComment extends Comment {
  /**
   * List of children.
   *
   * @see {@linkcode docast.DescriptionContent}
   */
  children: Exclude<docast.DescriptionContent, docast.InlineTag>[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode BlockCommentData}
   */
  data?: BlockCommentData | undefined

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: Extract<CommentKind, 'block'>
}

export type { BlockCommentData, BlockComment as default }
