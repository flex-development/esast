/**
 * @file Content - subscriptExpression
 * @module esast/content/subscriptExpression
 */

import type {
  AsExpression,
  CallExpression,
  MemberExpression,
  NonNullExpression,
  SatisfiesExpression,
  TaggedTemplateExpression,
  UpdateExpression
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a subscript expression
 * is expected.
 *
 * To register custom esast nodes, augment {@linkcode SubscriptExpressionMap}.
 * They will be added to this union automatically.
 */
type SubscriptExpression = SubscriptExpressionMap[keyof SubscriptExpressionMap]

/**
 * Registry of nodes that can occur where a {@linkcode SubscriptExpression} is
 * expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/esast' {
 *    interface SubscriptExpressionMap {
 *      customSubscriptExpression: CustomSubscriptExpression
 *    }
 *  }
 */
interface SubscriptExpressionMap {
  asExpression: AsExpression
  callExpression: CallExpression
  memberExpression: MemberExpression
  nonNullExpression: NonNullExpression
  satisfiesExpression: SatisfiesExpression
  taggedTemplateExpression: TaggedTemplateExpression
  updateExpression: UpdateExpression
}

export type { SubscriptExpression, SubscriptExpressionMap }
