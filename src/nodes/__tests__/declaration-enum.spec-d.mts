/**
 * @file Type Tests - EnumDeclaration
 * @module esast/nodes/tests/unit-d/EnumDeclaration
 */

import type * as TestSubject from '#nodes/declaration-enum'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/EnumDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.EnumDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [const: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('const').toEqualTypeOf<boolean>()
  })

  it('should match [data?: EnumDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "enumDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'enumDeclaration'>()
  })

  describe('EnumDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
