/**
 * @file Type Tests - Decorators
 * @module esast/types/tests/unit-d/Decorators
 */

import type { Decorator } from '@flex-development/esast'
import type { EmptyArray } from '@flex-development/tutils'
import type TestSubject from '../decorators'

describe('unit-d:types/Decorators', () => {
  it('should extract EmptyArray', () => {
    expectTypeOf<TestSubject>().extract<EmptyArray>().not.toBeNever()
  })

  it('should extract [Decorator, ...Decorator[]]', () => {
    expectTypeOf<TestSubject>()
      .extract<[Decorator, ...Decorator[]]>()
      .not.toBeNever()
  })
})
