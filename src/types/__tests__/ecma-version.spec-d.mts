/**
 * @file Type Tests - EcmaVersion
 * @module esast/types/tests/unit-d/EcmaVersion
 */

import type TestSubject from '#types/ecma-version'
import type * as acorn from 'acorn'

describe('unit-d:types/EcmaVersion', () => {
  it('should equal acorn.ecmaVersion', () => {
    expectTypeOf<TestSubject>().toEqualTypeOf<acorn.ecmaVersion>()
  })
})
