/**
 * @file Type Tests - Decorator
 * @module esast/nodes/tests/unit-d/Decorator
 */

import type * as TestSubject from '#nodes/decorator'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/Decorator', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.DecoratorData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: DecoratorData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "decorator"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'decorator'>()
  })

  describe('DecoratorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
