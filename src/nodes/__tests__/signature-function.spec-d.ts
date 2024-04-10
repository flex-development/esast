/**
 * @file Type Tests - FunctionSignature
 * @module esast/nodes/tests/unit-d/FunctionSignature
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-function'

describe('unit-d:nodes/FunctionSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<FunctionSignatureData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "functionSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionSignature'>()
  })

  describe('FunctionSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
