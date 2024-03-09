/**
 * @file Content - heritage
 * @module esast/content/heritage
 */

import type { ExpressionMap } from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where class heritage is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode HeritageMap}. They will
 * be added to this union automatically.
 */
type Heritage = HeritageMap[keyof HeritageMap]

/**
 * Registry of nodes that can occur where {@linkcode Heritage} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface HeritageMap {
 *      customHeritage: CustomHeritage
 *    }
 *  }
 *
 * @extends {ExpressionMap}
 */
interface HeritageMap extends ExpressionMap {}

export type { Heritage, HeritageMap }
