/**
 * @file Nodes - LineComment
 * @module esast/nodes/LineComment
 */

import * as docast from '@flex-development/docast'
import type { Comment, CommentData, CommentKind } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

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
  trailing?: Nilable<boolean>
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
  children: Exclude<docast.PhrasingContent, docast.InlineTag>[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode LineCommentData}
   */
  data?: Optional<LineCommentData>

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: Extract<CommentKind, 'line'>
}

export type { LineCommentData, LineComment as default }
