/**
 * @file Type Tests - ModuleExpression
 * @module esast/nodes/tests/unit-d/ModuleExpression
 */

import type * as TestSubject from '#nodes/expression-module'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ModuleExpression', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ModuleExpressionData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ModuleExpressionData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "moduleExpression"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'moduleExpression'>()
  })

  describe('ModuleExpressionData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
