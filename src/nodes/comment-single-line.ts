/**
 * @file Nodes - SingleLineComment
 * @module esast/nodes/SingleLineComment
 */

import type { CommentData, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with single line comments.
 *
 * @see {@linkcode CommentData}
 *
 * @extends {CommentData}
 */
interface SingleLineCommentData extends CommentData {}

/**
 * A single line comment.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface SingleLineComment extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode SingleLineCommentData}
   */
  data?: Optional<SingleLineCommentData>

  /**
   * Single line comment marker.
   */
  single: true

  /**
   * Node type.
   */
  type: 'comment'
}

export type { SingleLineCommentData, SingleLineComment as default }
