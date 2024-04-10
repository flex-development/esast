/**
 * @file Type Tests - InterfaceBody
 * @module esast/nodes/tests/unit-d/InterfaceBody
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../interface-body'

describe('unit-d:nodes/InterfaceBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.InterfaceBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<InterfaceBodyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "interfaceBody"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'interfaceBody'>()
  })

  describe('InterfaceBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
