/**
 * @file Type Tests - ClassDeclaration
 * @module esast/nodes/tests/unit-d/ClassDeclaration
 */

import type {
  ClassBody,
  ClassHeritage,
  Data,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-class'

describe('unit-d:nodes/ClassDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Identifier, ClassHeritage, ClassBody]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Identifier, ClassHeritage, ClassBody]>()
  })

  it('should match [data?: Optional<ClassDeclarationData>]', () => {
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
