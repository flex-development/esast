/**
 * @file Type Tests - ImportSpecifier
 * @module esast/nodes/tests/unit-d/ImportSpecifier
 */

import type { Data, ImportSpecifierKind, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../specifier-import'

describe('unit-d:nodes/ImportSpecifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportSpecifierData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ImportSpecifierData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: ImportSpecifierKind]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<ImportSpecifierKind>()
  })

  it('should match [type: "importSpecifier"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importSpecifier'>()
  })

  describe('ImportSpecifierData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
