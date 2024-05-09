/**
 * @file Nodes - UnionType
 * @module esast/nodes/UnionType
 */

import type {
  Comments,
  Data,
  Parent,
  TypeExpression
} from '@flex-development/esast'

/**
 * Info associated with union types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface UnionTypeData extends Data {}

/**
 * A union type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 *
 * @extends {Parent}
 */
interface UnionType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode TypeExpression}
   */
  children: [left: TypeExpression, ...comments: Comments, right: TypeExpression]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode UnionTypeData}
   */
  data?: UnionTypeData | undefined

  /**
   * Node type.
   */
  type: 'unionType'
}

export type { UnionTypeData, UnionType as default }
