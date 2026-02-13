/**
 * @file Nodes - HashbangComment
 * @module esast/nodes/HashbangComment
 */

import type { Comment, CommentData, CommentKind } from '@flex-development/esast'
import type * as mdast from 'mdast'

/**
 * Info associated with hashbang comments.
 *
 * @see {@linkcode CommentData}
 *
 * @extends {CommentData}
 */
interface HashbangCommentData extends CommentData {}

/**
 * A hashbang comment.
 *
 * @see {@linkcode Comment}
 * @see https://github.com/tc39/proposal-hashbang
 * @see https://tc39.es/proposal-hashbang/out.html
 *
 * @extends {Comment}
 */
interface HashbangComment extends Comment {
  /**
   * List of children.
   *
   * @see {@linkcode mdast.Text}
   */
  children: [mdast.Text]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode HashbangCommentData}
   */
  data?: HashbangCommentData | undefined

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: Extract<CommentKind, 'hashbang'>
}

export type { HashbangComment as default, HashbangCommentData }
