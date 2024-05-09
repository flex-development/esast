/**
 * @file Type Tests - ImportDeclaration
 * @module esast/nodes/tests/unit-d/ImportDeclaration
 */

import type { Data, ImportKind, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-import'

describe('unit-d:nodes/ImportDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ImportDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: ImportDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: ImportKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<ImportKind>()
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

    it('should match [typeOnly?: boolean | null | undefined]', () => {
      expectTypeOf<SubjectData>()
        .toHaveProperty('typeOnly')
        .toEqualTypeOf<Nilable<boolean>>()
    })
  })
})
