/**
 * @file Type Tests - ClassDeclaration
 * @module esast/nodes/tests/unit-d/ClassDeclaration
 */

import type * as TestSubject from '#nodes/declaration-class'
import type { ClassLike, Data } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ClassDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassDeclarationData

  it('should extend ClassLike', () => {
    expectTypeOf<Subject>().toExtend<ClassLike>()
  })

  it('should match [data?: ClassDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'classDeclaration'>()
  })

  describe('ClassDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
