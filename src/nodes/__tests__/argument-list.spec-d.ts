/**
 * @file Type Tests - ArgumentList
 * @module esast/nodes/tests/unit-d/ArgumentList
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../argument-list'

describe('unit-d:nodes/ArgumentList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ArgumentListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ArgumentListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "argumentList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'argumentList'>()
  })

  describe('ArgumentListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
