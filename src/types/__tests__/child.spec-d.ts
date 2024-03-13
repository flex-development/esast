/**
 * @file Type Tests - Child
 * @module esast/types/tests/unit-d/Child
 */

import type { AnyParent } from '@flex-development/esast'
import type { Children } from '@flex-development/unist-util-types'
import type TestSubject from '../child'

describe('unit-d:types/Child', () => {
  it('should equal Children<AnyParent>[number]', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<Children<AnyParent>[number]>()
  })
})
