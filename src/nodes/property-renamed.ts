/**
 * @file Nodes - RenamedProperty
 * @module esast/nodes/RenamedProperty
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  Expression,
  Identifier,
  PropertyName,
  SimpleProperty
} from '@flex-development/esast'

/**
 * A renamed property.
 *
 * @see {@linkcode SimpleProperty}
 *
 * @extends {SimpleProperty}
 */
interface RenamedProperty extends SimpleProperty {
  /**
   * List of children.
   *
   * @see {@linkcode Expression}
   * @see {@linkcode Identifier}
   * @see {@linkcode PropertyName}
   */
  children:
    | [
      ...comments: Comments,
      key: Expression,
      ...comments: InternalComments,
      value: Identifier
    ]
    | [key: PropertyName, ...comments: Comments, value: Identifier]
}

export type { RenamedProperty as default }
