/**
 * @file Nodes - MultiLineComment
 * @module esast/nodes/MultiLineComment
 */

import type { CommentData, Node } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with multi line comments.
 *
 * @see {@linkcode CommentData}
 *
 * @extends {CommentData}
 */
interface MultiLineCommentData extends CommentData {}

/**
 * A multi line comment.
 *
 * @see {@linkcode Node}
 *
 * @extends {Node}
 */
interface MultiLineComment extends Node {
  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MultiLineCommentData}
   */
  data?: Optional<MultiLineCommentData>

  /**
   * Multi line comment marker.
   */
  multi: true

  /**
   * Node type.
   */
  type: 'comment'
}

export type { MultiLineCommentData, MultiLineComment as default }
