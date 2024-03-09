/**
 * @file Type Tests - ClassBody
 * @module esast/nodes/tests/unit-d/ClassBody
 */

import type {
  Comment,
  Data,
  MethodDefinition,
  Parent,
  PropertyDefinition,
  StaticBlock
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'
import type * as TestSubject from '../class-body'

describe('unit-d:nodes/ClassBody', () => {
  type Subject = TestSubject.default
  type SubjectData = TestSubject.ClassBodyData

  it('should extend Parent', () => {
    expectTypeOf<Subject>().toMatchTypeOf<Parent>()
  })

  it('should match [children: (Comment | MethodDefinition | PropertyDefinition | StaticBlock)[]]', () => {
    // Arrange
    type Expect = (
      | Comment
      | MethodDefinition
      | PropertyDefinition
      | StaticBlock
    )[]

    // Expect
    expectTypeOf<Subject>().toHaveProperty('children').toEqualTypeOf<Expect>()
  })

  it('should match [data?: Optional<ClassBodyData>]', () => {
    expectTypeOf<Subject>()
      .toHaveProperty('data')
      .toEqualTypeOf<Optional<SubjectData>>()
  })

  it('should match [type: "classBody"]', () => {
    expectTypeOf<Subject>().toHaveProperty('type').toEqualTypeOf<'classBody'>()
  })

  describe('ClassBodyData', () => {
    it('should extend Data', () => {
      expectTypeOf<SubjectData>().toMatchTypeOf<Data>()
    })
  })
})
