/**
 * @file Nodes - ClassDeclaration
 * @module esast/nodes/ClassDeclaration
 */

import type { InternalComments } from '#internal'
import type {
  ClassBody,
  ClassHeritage,
  Comments,
  Data,
  Identifier,
  ModifierList,
  Parent,
  TypeParameterList
} from '@flex-development/esast'
import type { Optional } from '@flex-development/tutils'

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
   * @see {@linkcode ClassHeritage}
   * @see {@linkcode Comments}
   * @see {@linkcode Identifier}
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
      heritage: ClassHeritage,
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
      heritage: ClassHeritage,
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
      heritage: ClassHeritage,
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
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ClassDeclarationData}
   */
  data?: Optional<ClassDeclarationData>

  /**
   * Node type.
   */
  type: 'classDeclaration'
}

export type { ClassDeclarationData, ClassDeclaration as default }
