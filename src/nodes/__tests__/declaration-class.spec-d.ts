/**
 * @file Type Tests - ClassDeclaration
 * @module esast/nodes/tests/unit-d/ClassDeclaration
 */

import type { ClassLike, Data } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-class'

describe('unit-d:nodes/ClassDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassDeclarationData

  it('should extend ClassLike', () => {
    expectTypeOf<Subject>().toMatchTypeOf<ClassLike>()
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
