/**
 * @file Type Tests - AnyNode
 * @module esast/types/tests/unit-d/AnyNode
 */

import type { Root } from '@flex-development/esast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'
import type TestSubject from '../any-node'

describe('unit-d:types/AnyNode', () => {
  it('should equal InclusiveDescendant<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<InclusiveDescendant<Root>>()
  })
})
