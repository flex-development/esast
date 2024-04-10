/**
 * @file Type Tests - ModuleDeclaration
 * @module esast/nodes/tests/unit-d/ModuleDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-module'

describe('unit-d:nodes/ModuleDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ModuleDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ModuleDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "moduleDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'moduleDeclaration'>()
  })

  describe('ModuleDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
