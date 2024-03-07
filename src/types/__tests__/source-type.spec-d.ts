/**
 * @file Type Tests - SourceType
 * @module esast/types/tests/unit-d/SourceType
 */

import type TestSubject from '../source-type'

describe('unit-d:types/SourceType', () => {
  it('should extract "module"', () => {
    expectTypeOf<TestSubject>().extract<'module'>().not.toBeNever()
  })

  it('should extract "script"', () => {
    expectTypeOf<TestSubject>().extract<'script'>().not.toBeNever()
  })
})
