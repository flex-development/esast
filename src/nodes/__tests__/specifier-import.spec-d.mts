/**
 * @file Type Tests - ImportSpecifier
 * @module esast/nodes/tests/unit-d/ImportSpecifier
 */

import type * as TestSubject from '#nodes/specifier-import'
import type { Data, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ImportSpecifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportSpecifierData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ImportSpecifierData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "importSpecifier"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importSpecifier'>()
  })

  describe('ImportSpecifierData', () => {
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
