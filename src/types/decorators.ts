/**
 * @file Type Aliases - Decorators
 * @module esast/types/Decorators
 */

import type { Decorator, EmptyChildren } from '@flex-development/esast'

/**
 * An array containing decorator nodes, or an empty decorator node array.
 *
 * @see {@linkcode Decorator}
 */
type Decorators = EmptyChildren | [Decorator, ...Decorator[]]

export type { Decorators as default }
