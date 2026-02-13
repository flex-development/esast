/**
 * @file Type Tests - AssertionPredicate
 * @module esast/nodes/tests/unit-d/AssertionPredicate
 */

import type * as TestSubject from '#nodes/assertion-predicate'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/AssertionPredicate', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssertionPredicateData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: AssertionPredicateData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "assertionPredicate"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'assertionPredicate'>()
  })

  describe('AssertionPredicateData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
