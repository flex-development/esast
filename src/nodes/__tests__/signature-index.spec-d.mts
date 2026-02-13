/**
 * @file Type Tests - IndexSignature
 * @module esast/nodes/tests/unit-d/IndexSignature
 */

import type * as TestSubject from '#nodes/signature-index'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/IndexSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.IndexSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: IndexSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "indexSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'indexSignature'>()
  })

  describe('IndexSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
