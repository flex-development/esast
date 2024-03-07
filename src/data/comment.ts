/**
 * @file Data - CommentData
 * @module esast/data/CommentData
 */

import type Data from './data'

/**
 * Info associated with esast comment nodes.
 *
 * This space is guaranteed to never be specified by esast or unist, but it can
 * be used by utilities and plugins to store custom data.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface CommentData {
 *      // `node.data.leading` is typed as `boolean | null | undefined`
 *      leading?: boolean | null | undefined
 *    }
 *  }
 *
 * @extends {Data}
 */
interface CommentData extends Data {}

export type { CommentData as default }
