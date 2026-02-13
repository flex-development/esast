/**
 * @file Type Tests - FunctionDeclaration
 * @module esast/nodes/tests/unit-d/FunctionDeclaration
 */

import type * as TestSubject from '#nodes/declaration-function'
import type { Data, FunctionLike } from '@flex-development/esast'

describe('unit-d:nodes/FunctionDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionDeclarationData

  it('should extend FunctionLike', () => {
    expectTypeOf<Subject>().toExtend<FunctionLike>()
  })

  it('should match [type: "functionDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionDeclaration'>()
  })

  describe('FunctionDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
