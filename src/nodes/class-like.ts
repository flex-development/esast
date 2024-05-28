/**
 * @file Nodes - ClassLike
 * @module esast/nodes/ClassLike
 */

import type { InternalComments } from '#internal'
import type {
  ClassBody,
  ClassHeritage,
  Comments,
  DecoratorList,
  Identifier,
  ModifierList,
  Parent,
  TypeParameterList
} from '@flex-development/esast'

/**
 * A `class` declaration or expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ClassLike extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ClassBody}
   * @see {@linkcode ClassHeritage}
   * @see {@linkcode Comments}
   * @see {@linkcode DecoratorList}
   * @see {@linkcode Identifier}
   * @see {@linkcode ModifierList}
   * @see {@linkcode TypeParameterList}
   */
  children:
    | [
      ...comments: Comments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
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
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
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
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: Comments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      id: Identifier,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      id: Identifier,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      id: Identifier,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
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
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      typeParams: TypeParameterList,
      ...comments: InternalComments,
      heritage: ClassHeritage,
      ...comments: InternalComments,
      body: ClassBody
    ]
    | [...comments: Comments, body: ClassBody]
    | [decorators: DecoratorList, ...comments: Comments, body: ClassBody]
    | [modifiers: ModifierList, ...comments: Comments, body: ClassBody]

  /**
   * Node type.
   */
  type: `class${'Declaration' | 'Expression'}`
}

export type { ClassLike as default }
