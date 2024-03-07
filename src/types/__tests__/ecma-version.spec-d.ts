/**
 * @file Type Tests - EcmaVersion
 * @module esast/types/tests/unit-d/EcmaVersion
 */

import type * as acorn from 'acorn'
import type TestSubject from '../ecma-version'

describe('unit-d:types/EcmaVersion', () => {
  it('should equal acorn.ecmaVersion', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<acorn.ecmaVersion>()
  })
})
