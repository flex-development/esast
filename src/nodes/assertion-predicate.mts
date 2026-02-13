/**
 * @file Nodes - AssertionPredicate
 * @module esast/nodes/AssertionPredicate
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent,
  This,
  TypePredicate
} from '@flex-development/esast'

/**
 * Info associated with assertion predicates.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface AssertionPredicateData extends Data {}

/**
 * An assertion predicate (`asserts condition is T` or `asserts condition`).
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 *
 * @extends {Parent}
 */
interface AssertionPredicate extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode This}
   * @see {@linkcode TypePredicate}
   */
  children: [...comments: Comments, argument: Identifier | This | TypePredicate]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode AssertionPredicateData}
   */
  data?: AssertionPredicateData | undefined

  /**
   * Node type.
   */
  type: 'assertionPredicate'
}

export type { AssertionPredicateData, AssertionPredicate as default }
