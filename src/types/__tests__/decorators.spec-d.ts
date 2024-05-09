/**
 * @file Type Tests - Decorators
 * @module esast/types/tests/unit-d/Decorators
 */

import type { Decorator, EmptyChildren } from '@flex-development/esast'
import type TestSubject from '../decorators'

describe('unit-d:types/Decorators', () => {
  it('should extract EmptyChildren', () => {
    expectTypeOf<TestSubject>().extract<EmptyChildren>().not.toBeNever()
  })

  it('should extract [Decorator, ...Decorator[]]', () => {
    expectTypeOf<TestSubject>()
      .extract<[Decorator, ...Decorator[]]>()
      .not.toBeNever()
  })
})
