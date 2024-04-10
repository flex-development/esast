/**
 * @file Nodes - TypePredicate
 * @module esast/nodes/TypePredicate
 */

import type {
  Comments,
  Data,
  Identifier,
  Parent,
  This,
  TypeExpression
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with type predicates.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TypePredicateData extends Data {}

/**
 * A type predicate (`value is Type`).
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 *
 * @extends {Parent}
 */
interface TypePredicate extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
   * @see {@linkcode This}
   * @see {@linkcode TypeExpression}
   */
  children: [
    value: Identifier | This,
    ...comments: Comments,
    type: TypeExpression
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TypePredicateData}
   */
  data?: Optional<TypePredicateData>

  /**
   * Node type.
   */
  type: 'typePredicate'
}

export type { TypePredicateData, TypePredicate as default }
