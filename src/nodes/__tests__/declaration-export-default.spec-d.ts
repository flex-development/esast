/**
 * @file Type Tests - ExportDefaultDeclaration
 * @module esast/nodes/tests/unit-d/ExportDefaultDeclaration
 */

import type {
  ClassDeclaration,
  Data,
  Expression,
  FunctionDeclaration,
  Parent
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../declaration-export-default'

describe('unit-d:nodes/ExportDefaultDeclaration', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ExportDefaultDeclarationData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: [ClassDeclaration | Expression | FunctionDeclaration]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<[ClassDeclaration | Expression | FunctionDeclaration]>()
  })

  it('should match [data?: Optional<ExportDefaultDeclarationData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "exportDefaultDeclaration"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'exportDefaultDeclaration'>()
  })

  describe('ExportDefaultDeclarationData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
