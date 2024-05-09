/**
 * @file Type Tests - TypeAliasDeclaration
 * @module esast/nodes/tests/unit-d/TypeAliasDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-type-alias'

describe('unit-d:nodes/TypeAliasDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TypeAliasDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: TypeAliasDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "typeAliasDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'typeAliasDeclaration'>()
  })

  describe('TypeAliasDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
