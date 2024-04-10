/**
 * @file Nodes - ObjectLiteralType
 * @module esast/nodes/ObjectLiteralType
 */

import type {
  CallSignature,
  Comment,
  ConstructSignature,
  Data,
  IndexSignature,
  MethodSignature,
  Parent,
  PropertySignature
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with object literal types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ObjectLiteralTypeData extends Data {}

/**
 * An object literal type (`{ x: number }`).
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types
 *
 * @extends {Parent}
 */
interface ObjectLiteralType extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   * @see {@linkcode Comment}
   * @see {@linkcode ConstructSignature}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode PropertySignature}
   */
  children: (
    | CallSignature
    | Comment
    | ConstructSignature
    | IndexSignature
    | MethodSignature
    | PropertySignature
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ObjectLiteralTypeData}
   */
  data?: Optional<ObjectLiteralTypeData>

  /**
   * Node type.
   */
  type: 'objectLiteralType'
}

export type { ObjectLiteralTypeData, ObjectLiteralType as default }
