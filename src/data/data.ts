/**
 * @file Data - Data
 * @module esast/data/Data
 */

import type unist from 'unist'

/**
 * Info associated with esast nodes.
 *
 * This space is guaranteed to never be specified by unist or esast, but it can
 * be used by utilities and plugins to store custom data.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface Data {
 *      // `node.data.id` is typed as `number | undefined`
 *      id?: number | undefined
 *    }
 *  }
 *
 * @extends {unist.Data}
 */
interface Data extends unist.Data {}

export type { Data as default }
