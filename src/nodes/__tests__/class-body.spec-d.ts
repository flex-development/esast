/**
 * @file Type Tests - ClassBody
 * @module esast/nodes/tests/unit-d/ClassBody
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../class-body'

describe('unit-d:nodes/ClassBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ClassBodyData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classBody"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'classBody'>()
  })

  describe('ClassBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
