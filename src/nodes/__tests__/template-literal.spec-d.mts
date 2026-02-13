/**
 * @file Type Tests - TemplateLiteral
 * @module esast/nodes/tests/unit-d/TemplateLiteral
 */

import type * as TestSubject from '#nodes/template-literal'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/TemplateLiteral', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateLiteralData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: TemplateLiteralData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "templateLiteral"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'templateLiteral'>()
  })

  describe('TemplateLiteralData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
