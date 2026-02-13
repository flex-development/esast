/**
 * @file Type Tests - VariableDeclarator
 * @module esast/nodes/tests/unit-d/VariableDeclarator
 */

import type * as TestSubject from '#nodes/variable-declarator'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/VariableDeclarator', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.VariableDeclaratorData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: VariableDeclaratorData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "variableDeclarator"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'variableDeclarator'>()
  })

  describe('VariableDeclaratorData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
