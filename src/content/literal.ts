/**
 * @file Content - literal
 * @module esast/content/literal
 */

import type { PrimitiveMap, RegExpLiteral } from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a literal value is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode LiteralMap}. They will be
 * added to this union automatically.
 */
type LiteralValue = LiteralMap[keyof LiteralMap]

/**
 * Registry of nodes that can occur where a {@linkcode LiteralValue} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface LiteralMap {
 *      custom: CustomLiteral
 *    }
 *  }
 *
 * @extends {PrimitiveMap}
 */
interface LiteralMap extends PrimitiveMap {
  regexp: RegExpLiteral
}

export type { LiteralMap, LiteralValue }
