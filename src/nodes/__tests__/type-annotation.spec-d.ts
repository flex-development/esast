/**
 * @file Type Tests - TypeAnnotation
 * @module esast/nodes/tests/unit-d/TypeAnnotation
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../type-annotation'

describe('unit-d:nodes/TypeAnnotation', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAnnotationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeAnnotationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [definite: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('definite').toEqualTypeOf<boolean>()
  })

  it('should match [optional: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('optional').toEqualTypeOf<boolean>()
  })

  it('should match [type: "typeAnnotation"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAnnotation'>()
  })

  describe('TypeAnnotationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
