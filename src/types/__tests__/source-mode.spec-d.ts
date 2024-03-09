/**
 * @file Type Tests - SourceMode
 * @module esast/types/tests/unit-d/SourceMode
 */

import type TestSubject from '../source-mode'

describe('unit-d:types/SourceMode', () => {
  it('should extract "module"', () => {
    expectTypeOf<TestSubject>().extract<'module'>().not.toBeNever()
  })

  it('should extract "script"', () => {
    expectTypeOf<TestSubject>().extract<'script'>().not.toBeNever()
  })
})
