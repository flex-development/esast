/**
 * @file Type Tests - ExportSpecifier
 * @module esast/nodes/tests/unit-d/ExportSpecifier
 */

import type {
  Data,
  Identifier,
  Parent,
  StringLiteral
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../specifier-export'

describe('unit-d:nodes/ExportSpecifier', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportSpecifierData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [Identifier | StringLiteral, Identifier | StringLiteral]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[Identifier | StringLiteral, Identifier | StringLiteral]>()
  })

  it('should match [data?: Optional<ExportSpecifierData>]', () => {
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
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
