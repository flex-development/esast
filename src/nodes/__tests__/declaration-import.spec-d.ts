/**
 * @file Type Tests - ImportDeclaration
 * @module esast/nodes/tests/unit-d/ImportDeclaration
 */

import type { Data, ImportExportKind, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-import'

describe('unit-d:nodes/ImportDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ImportDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: ImportExportKind]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('kind')
      .toEqualTypeOf<ImportExportKind>()
  })

  it('should match [type: "importDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'importDeclaration'>()
  })

  describe('ImportDeclarationData', () => {
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
