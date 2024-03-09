/**
 * @file Nodes - DocblockComment
 * @module esast/nodes/DocblockComment
 */

import * as docast from '@flex-development/docast'
import type { Comment, CommentData, CommentKind } from '@flex-development/esast'
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
 * A docblock comment.
 *
 * @see {@linkcode Comment}
 * @see {@linkcode docast.Comment}
 *
 * @extends {Comment}
 * @extends {Omit<docast.Comment,'position'>}
 */
interface DocblockComment extends Comment, Omit<docast.Comment, 'position'> {
  /**
   * List of children.
   *
   * @see {@linkcode docast.FlowContent}
   */
  children: docast.FlowContent[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode DocblockCommentData}
   */
  data?: Optional<DocblockCommentData>

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: Extract<CommentKind, 'docblock'>
}

export type { DocblockCommentData, DocblockComment as default }
