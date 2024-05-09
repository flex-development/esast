/**
 * @file Nodes - Comment
 * @module esast/nodes/Comment
 */

import * as docast from '@flex-development/docast'
import type { CommentKind, Data, Parent } from '@flex-development/esast'

/**
 * Info associated with comments.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface CommentData extends Data {}

/**
 * A docblock, hashbang, block, or line comment.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface Comment extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode docast.DescriptionContent}
   * @see {@linkcode docast.FlowContent}
   */
  children: (docast.DescriptionContent | docast.FlowContent)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode CommentData}
   */
  data?: CommentData | undefined

  /**
   * Comment kind.
   *
   * @see {@linkcode CommentKind}
   */
  kind: CommentKind

  /**
   * Node type.
   */
  type: 'comment'
}

export type { CommentData, Comment as default }
