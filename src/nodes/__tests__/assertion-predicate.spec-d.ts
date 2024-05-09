/**
 * @file Type Tests - AssertionPredicate
 * @module esast/nodes/tests/unit-d/AssertionPredicate
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../assertion-predicate'

describe('unit-d:nodes/AssertionPredicate', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.AssertionPredicateData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<AssertionPredicateData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
