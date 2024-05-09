/**
 * @file Type Tests - ImportAssertion
 * @module esast/nodes/tests/unit-d/ImportAssertion
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../import-assertion'

describe('unit-d:nodes/ImportAssertion', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportAssertionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ImportAssertionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importAssertion"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importAssertion'>()
  })

  describe('ImportAssertionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
