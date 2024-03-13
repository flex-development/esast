/**
 * @file Type Tests - AnyParent
 * @module esast/types/tests/unit-d/AnyParent
 */

import type { Root } from '@flex-development/esast'
import type { Parents } from '@flex-development/unist-util-types'
import type TestSubject from '../any-parent'

describe('unit-d:types/AnyParent', () => {
  it('should equal Parents<Root>', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Parents<Root>>()
  })
})
