/**
 * @file Type Tests - node
 * @module esast/content/tests/unit-d/node
 */

import type {
  CatchClause,
  ClassBody,
  ClassHeritage,
  ExportSpecifier,
  ExportSpecifiers,
  HeritageMap,
  ImportSpecifier,
  ImportSpecifiers,
  MethodDefinition,
  Nothing,
  ParameterList,
  PatternMap,
  Property,
  PropertyDefinition,
  Root,
  RootMap,
  SpreadElement,
  StatementMap,
  Super,
  SwitchCase,
  TemplateElement,
  VariableDeclarator
} from '@flex-development/esast'
import type { InclusiveDescendant } from '@flex-development/unist-util-types'
import type * as TestSubject from '../node'

describe('unit-d:content/node', () => {
  describe('EsastNode', () => {
    it('should equal NodeMap[keyof NodeMap]', () => {
      expectTypeOf<TestSubject.EsastNode>()
        .toEqualTypeOf<TestSubject.NodeMap[keyof TestSubject.NodeMap]>
    })
  })

  describe('NodeMap', () => {
    it('should extend HeritageMap', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<HeritageMap>()
    })

    it('should extend PatternMap', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<PatternMap>()
    })

    it('should extend RootMap', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<RootMap>()
    })

    it('should extend StatementMap', () => {
      expectTypeOf<TestSubject.NodeMap>().toMatchTypeOf<StatementMap>()
    })

    it('should match [catchClause: CatchClause]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('catchClause')
        .toEqualTypeOf<CatchClause>()
    })

    it('should match [classBody: ClassBody]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('classBody')
        .toEqualTypeOf<ClassBody>()
    })

    it('should match [exportSpecifier: ExportSpecifier]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('exportSpecifier')
        .toEqualTypeOf<ExportSpecifier>()
    })

    it('should match [exportSpecifiers: ExportSpecifiers]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('exportSpecifiers')
        .toEqualTypeOf<ExportSpecifiers>()
    })

    it('should match [classHeritage: ClassHeritage]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('classHeritage')
        .toEqualTypeOf<ClassHeritage>()
    })

    it('should match [importSpecifier: ImportSpecifier]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('importSpecifier')
        .toEqualTypeOf<ImportSpecifier>()
    })

    it('should match [importSpecifiers: ImportSpecifiers]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('importSpecifiers')
        .toEqualTypeOf<ImportSpecifiers>()
    })

    it('should match [methodDefinition: MethodDefinition]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('methodDefinition')
        .toEqualTypeOf<MethodDefinition>()
    })

    it('should match [nothing: Nothing]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('nothing')
        .toEqualTypeOf<Nothing>()
    })

    it('should match [parameterList: ParameterList]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('parameterList')
        .toEqualTypeOf<ParameterList>()
    })

    it('should match [property: Property]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('property')
        .toEqualTypeOf<Property>()
    })

    it('should match [propertyDefinition: PropertyDefinition]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('propertyDefinition')
        .toEqualTypeOf<PropertyDefinition>()
    })

    it('should match [root: Root]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('root')
        .toEqualTypeOf<Root>()
    })

    it('should match [spreadElement: SpreadElement]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('spreadElement')
        .toEqualTypeOf<SpreadElement>()
    })

    it('should match [super: Super]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('super')
        .toEqualTypeOf<Super>()
    })

    it('should match [switchCase: SwitchCase]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('switchCase')
        .toEqualTypeOf<SwitchCase>()
    })

    it('should match [templateElement: TemplateElement]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('templateElement')
        .toEqualTypeOf<TemplateElement>()
    })

    it('should match [variableDeclarator: VariableDeclarator]', () => {
      expectTypeOf<TestSubject.NodeMap>()
        .toHaveProperty('variableDeclarator')
        .toEqualTypeOf<VariableDeclarator>()
    })

    it('should register all nodes', () => {
      // Arrange
      type Nodes = InclusiveDescendant<Root>
      type Subject = TestSubject.NodeMap[keyof TestSubject.NodeMap]

      // Expect
      expectTypeOf<Exclude<Subject, Nodes>>().toEqualTypeOf<never>()
    })
  })
})
