/**
 * @file Type Tests - ForXStatement
 * @module esast/nodes/tests/unit-d/ForXStatement
 */

import type {
  Expression,
  Parent,
  Pattern,
  Statement,
  VariableDeclaration
} from '@flex-development/esast'
import type TestSubject from '../statement-for-x'

describe('unit-d:nodes/ForXStatement', () => {
  it('should extend Parent', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Pattern | VariableDeclaration, Expression, Statement]]', () => {
    // Arrange
    type Expect = [Pattern | VariableDeclaration, Expression, Statement]

    // Expect
    expectTypeOf<TestSubject>()
      .toHaveProperty('children')
      .toEqualTypeOf<Expect>()
  })

  it('should match [type: `for${Uppercase<string>}${string}`]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('type')
      .toEqualTypeOf<`for${Uppercase<string>}${string}`>()
  })
})
