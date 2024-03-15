/**
 * @file Type Tests - FunctionDeclaration
 * @module esast/nodes/tests/unit-d/FunctionDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-function'

describe('unit-d:nodes/FunctionDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.FunctionDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<FunctionDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
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

    it('should match [async?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('async')
        .toEqualTypeOf<Nilable<boolean>>()
    })

    it('should match [generator?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('generator')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
