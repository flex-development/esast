/**
 * @file Type Tests - ExportDeclaration
 * @module esast/nodes/tests/unit-d/ExportDeclaration
 */

import type { Data, ImportExportKind, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-export'

describe('unit-d:nodes/ExportDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ExportDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: ImportExportKind]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<ImportExportKind>()
  })

  it('should match [type: "exportDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportDeclaration'>()
  })

  describe('ExportDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })

    it('should match [typeOnly?: Nilable<boolean>]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('typeOnly')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
