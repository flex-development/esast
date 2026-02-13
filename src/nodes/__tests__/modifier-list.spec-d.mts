/**
 * @file Type Tests - ModifierList
 * @module esast/nodes/tests/unit-d/ModifierList
 */

import type * as TestSubject from '#nodes/modifier-list'
import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ModifierList', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ModifierListData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ModifierListData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "modifierList"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'modifierList'>()
  })

  describe('ModifierListData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })
  })
})
