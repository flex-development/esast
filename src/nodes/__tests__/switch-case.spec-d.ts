/**
 * @file Type Tests - SwitchCase
 * @module esast/nodes/tests/unit-d/SwitchCase
 */

import type {
  Data,
  Expression,
  Parent,
  Statement
} from '@flex-development/esast'
import type { Nullable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../switch-case'

describe('unit-d:nodes/SwitchCase', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.SwitchCaseData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Nullable<Expression>?, ...Statement[]]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Nullable<Expression>?, ...Statement[]]>()
  })

  it('should match [data?: Optional<SwitchCaseData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "switchCase"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'switchCase'>()
  })

  describe('SwitchCaseData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
