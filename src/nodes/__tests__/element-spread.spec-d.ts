/**
 * @file Type Tests - SpreadElement
 * @module esast/nodes/tests/unit-d/SpreadElement
 */

import type { Data, Expression, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../element-spread'

describe('unit-d:nodes/SpreadElement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SpreadElementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression]>()
  })

  it('should match [data?: Optional<SpreadElementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "spreadElement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'spreadElement'>()
  })

  describe('SpreadElementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
