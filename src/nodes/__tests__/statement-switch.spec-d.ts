/**
 * @file Type Tests - SwitchStatement
 * @module esast/nodes/tests/unit-d/SwitchStatement
 */

import type {
  Comment,
  Data,
  Expression,
  Parent,
  SwitchCase
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../statement-switch'

describe('unit-d:nodes/SwitchStatement', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchStatementData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Expression, ...(Comment | SwitchCase)[]]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Expression, ...(Comment | SwitchCase)[]]>()
  })

  it('should match [data?: Optional<SwitchStatementData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "switchStatement"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'switchStatement'>()
  })

  describe('SwitchStatementData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
