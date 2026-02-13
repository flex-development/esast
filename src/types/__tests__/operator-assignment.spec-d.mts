/**
 * @file Type Tests - AssignmentOperator
 * @module esast/types/tests/unit-d/AssignmentOperator
 */

import type TestSubject from '#types/operator-assignment'

describe('unit-d:types/AssignmentOperator', () => {
  it('should extract "-="', () => {
    expectTypeOf<TestSubject>().extract<'-='>().not.toBeNever()
  })

  it('should extract "??="', () => {
    expectTypeOf<TestSubject>().extract<'??='>().not.toBeNever()
  })

  it('should extract "**="', () => {
    expectTypeOf<TestSubject>().extract<'**='>().not.toBeNever()
  })

  it('should extract "*="', () => {
    expectTypeOf<TestSubject>().extract<'*='>().not.toBeNever()
  })

  it('should extract "/="', () => {
    expectTypeOf<TestSubject>().extract<'/='>().not.toBeNever()
  })

  it('should extract "&&="', () => {
    expectTypeOf<TestSubject>().extract<'&&='>().not.toBeNever()
  })

  it('should extract "&="', () => {
    expectTypeOf<TestSubject>().extract<'&='>().not.toBeNever()
  })

  it('should extract "%="', () => {
    expectTypeOf<TestSubject>().extract<'%='>().not.toBeNever()
  })

  it('should extract "^="', () => {
    expectTypeOf<TestSubject>().extract<'^='>().not.toBeNever()
  })

  it('should extract "+="', () => {
    expectTypeOf<TestSubject>().extract<'+='>().not.toBeNever()
  })

  it('should extract "<<="', () => {
    expectTypeOf<TestSubject>().extract<'<<='>().not.toBeNever()
  })

  it('should extract "="', () => {
    expectTypeOf<TestSubject>().extract<'='>().not.toBeNever()
  })

  it('should extract ">>="', () => {
    expectTypeOf<TestSubject>().extract<'>>='>().not.toBeNever()
  })

  it('should extract ">>>="', () => {
    expectTypeOf<TestSubject>().extract<'>>>='>().not.toBeNever()
  })

  it('should extract "|="', () => {
    expectTypeOf<TestSubject>().extract<'|='>().not.toBeNever()
  })

  it('should extract "||="', () => {
    expectTypeOf<TestSubject>().extract<'|='>().not.toBeNever()
  })
})
