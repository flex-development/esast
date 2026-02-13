/**
 * @file Type Tests - MappedSignature
 * @module esast/nodes/tests/unit-d/MappedSignature
 */

import type * as TestSubject from '#nodes/signature-mapped'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/MappedSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MappedSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: MappedSignatureData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "mappedSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'mappedSignature'>()
  })

  describe('MappedSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
