/**
 * @file Type Tests - Data
 * @module esast/data/tests/unit-d/Data
 */

import type TestSubject from '#data/data'
import type unist from 'unist'

describe('unit-d:data/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toExtend<unist.Data>()
  })
})
