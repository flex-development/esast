/**
 * @file Type Tests - Data
 * @module esast/data/tests/unit-d/Data
 */

import type unist from 'unist'
import type TestSubject from '../data'

describe('unit-d:data/Data', () => {
  it('should extend unist.Data', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<unist.Data>()
  })
})
