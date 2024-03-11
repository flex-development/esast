/**
 * @file Type Tests - Parent
 * @module esast/nodes/tests/unit-d/Parent
 */

import type { Child, Node } from '@flex-development/esast'
import type TestSubject from '../parent'

describe('unit-d:nodes/Parent', () => {
  it('should extend Node', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Node>()
  })

  it('should match [children: Child[]]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Child[]>()
  })
})
