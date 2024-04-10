/**
 * @file Nodes - ClassBody
 * @module esast/nodes/ClassBody
 */

import type {
  Comment,
  Data,
  Decorator,
  FunctionSignature,
  IndexSignature,
  MethodDefinition,
  Parent,
  PropertyDefinition,
  StaticBlock
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `class` bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassBodyData extends Data {}

/**
 * A `class` declaration or expression body.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Decorator}
   * @see {@linkcode FunctionSignature}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MethodDefinition}
   * @see {@linkcode PropertyDefinition}
   * @see {@linkcode StaticBlock}
   */
  children: (
    | Comment
    | Decorator
    | FunctionSignature
    | IndexSignature
    | MethodDefinition
    | PropertyDefinition
    | StaticBlock
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassBodyData}
   */
  data?: Optional<ClassBodyData>

  /**
   * Node type.
   */
  type: 'classBody'
}

export type { ClassBodyData, ClassBody as default }
