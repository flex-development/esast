/**
 * @file Type Tests - TypePredicate
 * @module esast/nodes/tests/unit-d/TypePredicate
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-predicate'

describe('unit-d:nodes/TypePredicate', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypePredicateData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<TypePredicateData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typePredicate"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typePredicate'>()
  })

  describe('TypePredicateData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
