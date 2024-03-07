/**
 * @file Type Tests - CommentData
 * @module esast/data/tests/unit-d/CommentData
 */

import type TestSubject from '../comment'
import type Data from '../data'

describe('unit-d:data/CommentData', () => {
  it('should extend Data', () => {
    expectTypeOf<TestSubject>().toMatchTypeOf<Data>()
  })
})
