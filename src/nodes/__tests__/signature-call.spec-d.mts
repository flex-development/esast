/**
 * @file Type Tests - CallSignature
 * @module esast/nodes/tests/unit-d/CallSignature
 */

import type * as TestSubject from '#nodes/signature-call'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/CallSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.CallSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: CallSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "callSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'callSignature'>()
  })

  describe('CallSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
