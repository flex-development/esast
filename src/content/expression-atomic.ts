/**
 * @file Content - atomicExpression
 * @module esast/content/atomicExpression
 */

import type {
  ArrowFunctionExpression,
  ModuleExpression,
  NewExpression,
  PrimaryExpressionMap,
  Super
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where an atomic expression is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode AtomicExpressionMap}. They
 * will be added to this union automatically.
 */
type AtomicExpression = AtomicExpressionMap[keyof AtomicExpressionMap]

/**
 * Registry of nodes that can occur where an {@linkcode AtomicExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface AtomicExpressionMap {
 *      customAtomicExpression: CustomAtomicExpression
 *    }
 *  }
 *
 * @see {@linkcode PrimaryExpressionMap}
 *
 * @extends {PrimaryExpressionMap}
 */
interface AtomicExpressionMap extends PrimaryExpressionMap {
  arrowFunctionExpression: ArrowFunctionExpression
  moduleExpression: ModuleExpression
  newExpression: NewExpression
  super: Super
}

export type { AtomicExpression, AtomicExpressionMap }
