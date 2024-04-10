/**
 * @file Type Tests - ModuleBody
 * @module esast/nodes/tests/unit-d/ModuleBody
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../module-body'

describe('unit-d:nodes/ModuleBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ModuleBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ModuleBodyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "moduleBody"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'moduleBody'>()
  })

  describe('ModuleBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
