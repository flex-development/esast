/**
 * @file Nodes - ClassDeclaration
 * @module esast/nodes/ClassDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassBody,
  Comments,
  Data,
  ExtendsClause,
  Identifier,
  ImplementsClause,
  ModifierList,
  Parent,
  TypeParameterList
} from '@flex-development/esast'

/**
 * Info associated with `class` declarations.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ClassDeclarationData extends Data {}

/**
 * A `class` declaration.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassDeclaration extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassBody}
   * @see {@linkcode Comments}
   * @see {@linkcode ExtendsClause}
   * @see {@linkcode Identifier}
   * @see {@linkcode ImplementsClause}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      implement: ImplementsClause,
      ...comments: InternalComments,
      extend: ExtendsClause,
      ...comments: InternalComments,
      body: ClassBody
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassDeclarationData}
   */
  data?: ClassDeclarationData | undefined

  /**
   * Node type.
   */
  type: 'classDeclaration'
}

export type { ClassDeclarationData, ClassDeclaration as default }
