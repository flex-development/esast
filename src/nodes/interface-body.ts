/**
 * @file Nodes - InterfaceBody
 * @module esast/nodes/InterfaceBody
 */

import type {
  CallSignature,
  Comment,
  ConstructSignature,
  Data,
  IndexSignature,
  MappedSignature,
  MethodSignature,
  Parent,
  PropertySignature
} from '@flex-development/esast'

/**
 * Info associated with `interface` declaration bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface InterfaceBodyData extends Data {}

/**
 * An `interface` declaration body.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface InterfaceBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode CallSignature}
   * @see {@linkcode Comment}
   * @see {@linkcode ConstructSignature}
   * @see {@linkcode IndexSignature}
   * @see {@linkcode MappedSignature}
   * @see {@linkcode MethodSignature}
   * @see {@linkcode PropertySignature}
   */
  children: (
    | CallSignature
    | Comment
    | ConstructSignature
    | IndexSignature
    | MappedSignature
    | MethodSignature
    | PropertySignature
  )[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode InterfaceBodyData}
   */
  data?: InterfaceBodyData | undefined

  /**
   * Node type.
   */
  type: 'interfaceBody'
}

export type { InterfaceBodyData, InterfaceBody as default }
