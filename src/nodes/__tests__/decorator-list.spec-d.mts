/**
 * @file Type Tests - DecoratorList
 * @module esast/nodes/tests/unit-d/DecoratorList
 */

import type * as TestSubject from '#nodes/decorator-list'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/DecoratorList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DecoratorListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: DecoratorListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "decoratorList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'decoratorList'>()
  })

  describe('DecoratorListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
