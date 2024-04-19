/**
 * @file Type Tests - RenamedProperty
 * @module esast/nodes/tests/unit-d/RenamedProperty
 */

import type { SimpleProperty } from '@flex-development/esast'
import type * as TestSubject from '../property-renamed'

describe('unit-d:nodes/RenamedProperty', () => {
  type Subject = TestSubject.default

  it('should extend SimpleProperty', () => {
    expectTypeOf<Subject>().toMatchTypeOf<SimpleProperty>()
  })
})
