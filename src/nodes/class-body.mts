/**
 * @file Nodes - ClassBody
 * @module esast/nodes/ClassBody
 */

import type {
  Comment,
  Data,
  Decorator,
  FieldDefinition,
  IndexSignature,
  MethodDefinition,
  MethodSignature,
  Parent,
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
   * @see {@linkcode FieldDefinition}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MethodDefinition}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode StaticBlock}
   */
  children: (
    | Comment
    | Decorator
    | FieldDefinition
    | IndexSignature
    | MethodDefinition
    | MethodSignature
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
