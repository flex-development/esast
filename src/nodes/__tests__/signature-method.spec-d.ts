/**
 * @file Type Tests - MethodSignature
 * @module esast/nodes/tests/unit-d/MethodSignature
 */

import type { Data, MethodKind, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../signature-method'

describe('unit-d:nodes/MethodSignature', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.MethodSignatureData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [computed: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('computed').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<MethodSignatureData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: MethodKind]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<MethodKind>()
  })

  it('should match [type: "methodSignature"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'methodSignature'>()
  })

  describe('MethodSignatureData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
