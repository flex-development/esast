/**
 * @file Nodes - MappedType
 * @module esast/nodes/MappedType
 */

import type { InternalComments } from '#internal'
import type {
  Comment,
  Comments,
  Data,
  IndexSignature,
  MappedSignature,
  MethodSignature,
  Parent,
  PropertySignature
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with mapped types.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface MappedTypeData extends Data {}

/**
 * A mapped type.
 *
 * @see {@linkcode Parent}
 * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 *
 * @extends {Parent}
 */
interface MappedType extends Parent {
  /**
   * List of children.
   *
   * **Note**: A valid mapped type has exactly one mapped signature, and no
   * other signatures.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode Comment}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MappedSignature}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode PropertySignature}
   */
  children:
    | (
      | Comment
      | IndexSignature
      | MappedSignature
      | MethodSignature
      | PropertySignature
    )[]
    | [...comments: Comments, MappedSignature, ...comments: InternalComments]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode MappedTypeData}
   */
  data?: Optional<MappedTypeData>

  /**
   * Node type.
   */
  type: 'mappedType'
}

export type { MappedTypeData, MappedType as default }
