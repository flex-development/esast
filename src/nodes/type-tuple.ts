/**
 * @file Nodes - TupleType
 * @module esast/nodes/TupleType
 */

import type {
  Comment,
  Comments,
  Data,
  EmptyChildren,
  Nothing,
  Parent,
  TupleElement
} from '@flex-development/esast'

/**
 * Info associated with tuple types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface TupleTypeData extends Data {}

/**
 * A tuple type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 *
 * @extends {Parent}
 */
interface TupleType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode Nothing}
   * @see {@linkcode TupleElement}
   */
  children: (Comment | Nothing | TupleElement)[] | Comments | EmptyChildren

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TupleTypeData}
   */
  data?: TupleTypeData | undefined

  /**
   * Node type.
   */
  type: 'tupleType'
}

export type { TupleTypeData, TupleType as default }
