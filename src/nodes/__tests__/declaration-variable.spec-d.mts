/**
 * @file Type Tests - VariableDeclaration
 * @module esast/nodes/tests/unit-d/VariableDeclaration
 */

import type * as TestSubject from '#nodes/declaration-variable'
import type { Data, Parent, VariableKind } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/VariableDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.VariableDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: VariableDeclarationData | undefined]', () => {
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
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
