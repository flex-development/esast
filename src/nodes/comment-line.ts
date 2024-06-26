/**
 * @file Nodes - LineComment
 * @module esast/nodes/LineComment
 */

import type * as docast from '@flex-development/docast'
import type { Comment, CommentData, CommentKind } from '@flex-development/esast'

/**
 * Info associated with line comments.
 *
 * @see {@linkcode CommentData}
 *
 * @extends {CommentData}
 */
interface LineCommentData extends CommentData {
  /**
   * Trailing comment?
   *
   * Trailing comments start and end on the same `end` line as the node they
   * succeed.
   */
  trailing?: boolean | null | undefined
}

/**
 * A line comment.
 *
 * @see {@linkcode Comment}
 *
 * @extends {Comment}
 */
interface LineComment extends Comment {
  /**
   * List of children.
   *
   * @see {@linkcode docast.PhrasingContent}
   */
  children: docast.PhrasingContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode LineCommentData}
   */
  data?: LineCommentData | undefined

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: Extract<CommentKind, 'line'>
}

export type { LineCommentData, LineComment as default }
