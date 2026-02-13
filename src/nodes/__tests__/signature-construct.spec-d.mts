/**
 * @file Type Tests - ConstructSignature
 * @module esast/nodes/tests/unit-d/ConstructSignature
 */

import type * as TestSubject from '#nodes/signature-construct'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ConstructSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ConstructSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ConstructSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "constructSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'constructSignature'>()
  })

  describe('ConstructSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
