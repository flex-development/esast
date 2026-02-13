/**
 * @file Type Tests - Parent
 * @module esast/nodes/tests/unit-d/Parent
 */

import type TestSubject from '#nodes/parent'
import type { Child, Node } from '@flex-development/esast'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toExtend<Node>()
  })

  it('should match [children: Child[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })
})
