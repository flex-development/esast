/**
 * @file Type Tests - ExportSpecifier
 * @module esast/nodes/tests/unit-d/ExportSpecifier
 */

import type * as TestSubject from '#nodes/specifier-export'
import type { Data, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ExportSpecifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportSpecifierData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ExportSpecifierData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "exportSpecifier"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportSpecifier'>()
  })

  describe('ExportSpecifierData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toExtend<Data>()
    })

    it('should match [typeOnly?: boolean | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('typeOnly')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
