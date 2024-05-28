/**
 * @file Type Tests - FunctionDeclaration
 * @module esast/nodes/tests/unit-d/FunctionDeclaration
 */

import type { Data, FunctionLike } from '@flex-development/esast'
import type * as TestSubject from '../declaration-function'

describe('unit-d:nodes/FunctionDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionDeclarationData

  it('should extend FunctionLike', () => {
    expectTypeOf<Subject>().toMatchTypeOf<FunctionLike>()
  })

  it('should match [type: "functionDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'functionDeclaration'>()
  })

  describe('FunctionDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
