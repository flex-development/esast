/**
 * @file Nodes - EnumBody
 * @module esast/nodes/EnumBody
 */

import type {
  Comment,
  Data,
  EnumMember,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

/**
 * Info associated with `enum` declaration bodies.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface EnumBodyData extends Data {}

/**
 * An `enum` declaration body.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface EnumBody extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode EnumMember}
   */
  children: (Comment | EnumMember)[]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode EnumBodyData}
   */
  data?: Optional<EnumBodyData>

  /**
   * Node type.
   */
  type: 'enumBody'
}

export type { EnumBodyData, EnumBody as default }
