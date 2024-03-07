/**
 * @file Content - primitive
 * @module esast/content/primitive
 */

import type {
  BigIntLiteral,
  BooleanLiteral,
  NullLiteral,
  NumberLiteral,
  StringLiteral,
  UndefinedLiteral
} from '@flex-development/esast'

/**
 * Union of registered esast nodes that can occur where a primitive value is
 * expected.
 *
 * To register custom esast nodes, augment {@linkcode PrimitiveMap}. They will
 * be added to this union automatically.
 */
type Primitive = PrimitiveMap[keyof PrimitiveMap]

/**
 * Registry of nodes that can occur where a {@linkcode Primitive} is expected.
 *
 * This interface can be augmented to register custom node types.
 *
 * @example
 *  declare module '@flex-development/docast' {
 *    interface PrimitiveMap {
 *      custom: CustomPrimitive
 *    }
 *  }
 */
interface PrimitiveMap {
  bigint: BigIntLiteral
  boolean: BooleanLiteral
  null: NullLiteral
  number: NumberLiteral
  string: StringLiteral
  undefined: UndefinedLiteral
}

export type { Primitive, PrimitiveMap }
