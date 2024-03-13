/**
 * @file Type Tests - ClassHeritage
 * @module esast/nodes/tests/unit-d/ClassHeritage
 */

import type { Comment, Data, Heritage, Parent } from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../class-heritage'

describe('unit-d:nodes/ClassHeritage', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassHeritageData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | Heritage)[]]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('children')
      .toEqualTypeOf<(Comment | Heritage)[]>()
  })

  it('should match [data?: Optional<ClassHeritageData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classHeritage"]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('type')
      .toEqualTypeOf<'classHeritage'>()
  })

  describe('ClassHeritageData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
