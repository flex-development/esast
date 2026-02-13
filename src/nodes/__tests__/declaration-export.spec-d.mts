/**
 * @file Type Tests - ExportDeclaration
 * @module esast/nodes/tests/unit-d/ExportDeclaration
 */

import type * as TestSubject from '#nodes/declaration-export'
import type { Data, ExportKind, Parent } from '@flex-development/esast'
import type { Nilable, Optional } from '@flex-development/tutils'

describe('unit-d:nodes/ExportDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toExtend<Parent>()
  })

  it('should match [data?: ExportDeclarationData | undefined]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [kind: ExportKind]', () => {
    expectTypeOf<Subject>().toHaveProperty('kind').toEqualTypeOf<ExportKind>()
  })

  it('should match [type: "exportDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportDeclaration'>()
  })

  describe('ExportDeclarationData', () => {
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
