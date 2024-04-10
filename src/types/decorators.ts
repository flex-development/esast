/**
 * @file Type Aliases - Decorators
 * @module esast/types/Decorators
 */

import type { Decorator } from '@flex-development/esast'
import type { EmptyArray } from '@flex-development/tutils'

/**
 * An array containing decorators, or an empty decorator array.
 *
 * @see {@linkcode Decorator}
 */
type Decorators = EmptyArray | [Decorator, ...Decorator[]]

export type { Decorators as default }
