/**
 * @file Nodes - ClassBody
 * @module esast/nodes/ClassBody
 */

import type {
  Comment,
  Data,
  Decorator,
  IndexSignature,
  MethodDefinition,
  MethodSignature,
  Parent,
  PropertyDefinition,
  StaticBlock
} from '@flex-development/esast'

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
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MethodDefinition}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode PropertyDefinition}
   * @see {@linkcode StaticBlock}
   */
  children: (
    | Comment
    | Decorator
    | IndexSignature
    | MethodDefinition
    | MethodSignature
    | PropertyDefinition
    | StaticBlock
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassBodyData}
   */
  data?: ClassBodyData | undefined

  /**
   * Node type.
   */
  type: 'classBody'
}

export type { ClassBodyData, ClassBody as default }
