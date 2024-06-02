/**
 * @file Content - subclauseExpression
 * @module esast/content/subclauseExpression
 */

import type { AsExpression, SatisfiesExpression } from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a subclause expression
 * is expected.
 *
 * To register custom esast nodes, augment {@linkcode SubclauseExpressionMap}.
 * They will be added to this union automatically.
 */
type SubclauseExpression = SubclauseExpressionMap[keyof SubclauseExpressionMap]

/**
 * Registry of nodes that can occur where a {@linkcode SubclauseExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface SubclauseExpressionMap {
 *      customSubclauseExpression: CustomSubclauseExpression
 *    }
 *  }
 */
interface SubclauseExpressionMap {
  asExpression: AsExpression
  satisfiesExpression: SatisfiesExpression
}

export type { SubclauseExpression, SubclauseExpressionMap }
