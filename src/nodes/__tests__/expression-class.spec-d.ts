/**
 * @file Type Tests - ClassExpression
 * @module esast/nodes/tests/unit-d/ClassExpression
 */

import type {
  ClassBody,
  ClassHeritage,
  Data,
  Identifier,
  Parent
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../expression-class'

describe('unit-d:nodes/ClassExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Nullable<Identifier>, ClassHeritage, ClassBody]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Nullable<Identifier>, ClassHeritage, ClassBody]>()
  })

  it('should match [data?: Optional<ClassExpressionData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'classExpression'>()
  })

  describe('ClassExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
