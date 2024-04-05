/**
 * @file Type Aliases - AnyNode
 * @module esast/types/AnyNode
 */

import type { Root } from '@flex-development/esast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'

/**
 * Union of nodes that can occur in esast.
 */
type AnyNode = InclusiveDescendant<Root>

export type { AnyNode as default }
