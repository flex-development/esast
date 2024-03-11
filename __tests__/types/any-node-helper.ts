/**
 * @file Test Types - NodeObject
 * @module tests/types/NodeObject
 */

import type { Node, Root } from '@flex-development/esast'
import type { Times } from '@flex-development/tutils'
import type * as mdast from 'mdast'

/**
 * Get the difference between `M` and `S`.
 *
 * @template M - Minuend
 * @template S - Subtrahend
 */
// dprint-ignore
type Subtract<M extends number, S extends number> = M extends number
  ? S extends number
    ? Times<M> extends [...Times<S>, ...infer R]
      ? R['length']
      : never
    : never
  : never

/**
 * Collect esast nodes.
 *
 * @internal
 *
 * @template {Node} T - Node to begin recursing from
 * @template {number} [Max=10] - Max depth
 */
// dprint-ignore
type AnyNodeHelper<T extends Node = Root, Max extends number = 10> = Exclude<
  0 extends Max
    ? T
    : T extends { children: (infer U extends Node)[] }
      ? NonNullable<AnyNodeHelper<U, Subtract<Max, 1>> | T | U>
      : T extends Node
        ? T
        : never,
  mdast.Heading
>

export type { AnyNodeHelper as default }
