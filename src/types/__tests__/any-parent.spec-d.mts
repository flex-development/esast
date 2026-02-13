/**
 * @file Type Tests - AnyParent
 * @module esast/types/tests/unit-d/AnyParent
 */

import type TestSubject from '#types/any-parent'
import type { Root } from '@flex-development/esast'
import type { Parents } from '@flex-development/unist-util-types'

describe('unit-d:types/AnyParent', () => {
  it('should equal Parents<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Parents<Root>>()
  })
})
