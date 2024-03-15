/**
 * @file Type Tests - ExportAllDeclaration
 * @module esast/nodes/tests/unit-d/ExportAllDeclaration
 */

import type { Data, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-export-all'

describe('unit-d:nodes/ExportAllDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportAllDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [data?: Optional<ExportAllDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "exportAllDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportAllDeclaration'>()
  })

  describe('ExportAllDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
