/**
 * @file Nodes - TupleType
 * @module esast/nodes/TupleType
 */

import type {
  Comment,
  Data,
  Parent,
  TupleElement
} from '@flex-development/esast'
import type { EmptyArray, Optional } from '@flex-development/tutils'

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
   * @see {@linkcode Comment}
   * @see {@linkcode TupleElement}
   */
  children: (Comment | TupleElement)[] | EmptyArray

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode TupleTypeData}
   */
  data?: Optional<TupleTypeData>

  /**
   * Node type.
   */
  type: 'tupleType'
}

export type { TupleTypeData, TupleType as default }
