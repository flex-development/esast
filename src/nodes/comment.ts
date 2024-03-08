/**
 * @file Nodes - Comment
 * @module esast/nodes/Comment
 */

import * as docast from '@flex-development/docast'
import type { CommentKind } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with comments.
 *
 * @see {@linkcode docast.CommentData}
 *
 * @extends {docast.CommentData}
 */
interface CommentData extends docast.CommentData {}

/**
 * A docblock, hashbang, block, or line comment.
 *
 * @see {@linkcode docast.Comment}
 *
 * @extends {docast.Comment}
 */
interface Comment extends docast.Comment {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentData}
   */
  data?: Optional<CommentData>

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: CommentKind
}

export type { CommentData, Comment as default }
