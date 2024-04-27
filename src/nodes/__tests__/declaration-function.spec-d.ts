/**
 * @file Type Tests - FunctionDeclaration
 * @module esast/nodes/tests/unit-d/FunctionDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-function'

describe('unit-d:nodes/FunctionDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [async: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('async').toEqualTypeOf<boolean>()
  })

  it('should match [data?: Optional<FunctionDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [generator: boolean]', () => {
    expectTypeOf<Subject>().toHaveProperty('generator').toEqualTypeOf<boolean>()
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
