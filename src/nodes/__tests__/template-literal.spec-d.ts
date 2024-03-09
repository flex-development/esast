/**
 * @file Type Tests - TemplateLiteral
 * @module esast/nodes/tests/unit-d/TemplateLiteral
 */

import type {
  Data,
  Expression,
  Parent,
  TemplateElement
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../template-literal'

describe('unit-d:nodes/TemplateLiteral', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.TemplateLiteralData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Expression | TemplateElement)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Expression | TemplateElement)[]>()
  })

  it('should match [data?: Optional<TemplateLiteralData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})