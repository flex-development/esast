/**
 * @file Type Tests - VariableDeclaration
 * @module esast/nodes/tests/unit-d/VariableDeclaration
 */

import type { Data, Parent, VariableKind } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-variable'

describe('unit-d:nodes/VariableDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.VariableDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<VariableDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: VariableKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<VariableKind>()
  })

  it('should match [type: "variableDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'variableDeclaration'>()
  })

  describe('VariableDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
