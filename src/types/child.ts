/**
 * @file Type Definitions - Child
 * @module esast/types/Child
 */

import type { AnyParent } from '@flex-development/esast'
import type { Children } from '@flex-development/unist-util-types'

/**
 * Union of [*child*][1] nodes that are [*inclusive descendants*][2] of
 * {@linkcode Root}.
 *
 * [1]: https://github.com/syntax-tree/unist#child
 * [2]: https://github.com/syntax-tree/unist#descendant
 */
type Child = Children<AnyParent>[number]

export type { Child as default }
