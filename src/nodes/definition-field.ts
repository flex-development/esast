/**
 * @file Nodes - FieldDefinition
 * @module esast/nodes/FieldDefinition
 */

import type { InternalComments } from '#internal'
import type {
  Comments,
  ComputedExpression,
  Data,
  DecoratorList,
  Expression,
  ModifierList,
  Parent,
  PropertyName,
  TypeAnnotation
} from '@flex-development/esast'

/**
 * Info associated with `class` field definitions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface FieldDefinitionData extends Data {}

/**
 * A `class` field definition.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface FieldDefinition extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comments}
   * @see {@linkcode ComputedExpression}
   * @see {@linkcode DecoratorList}
   * @see {@linkcode ModifierList}
   * @see {@linkcode PropertyName}
   * @see {@linkcode TypeAnnotation}
   */
  children:
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      modifiers: ModifierList,
      ...comments: InternalComments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments
    ]
    | [
      decorators: DecoratorList,
      ...comments: Comments,
      name: Expression,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments
    ]
    | [
      modifiers: ModifierList,
      ...comments: Comments,
      name: ComputedExpression | PropertyName,
      ...comments: InternalComments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      name: ComputedExpression | PropertyName,
      ...comments: Comments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [
      name: ComputedExpression | PropertyName,
      ...comments: Comments,
      type: TypeAnnotation,
      ...comments: InternalComments
    ]
    | [
      name: Expression,
      ...comments: Comments,
      type: TypeAnnotation,
      ...comments: InternalComments,
      init: Expression,
      ...comments: InternalComments
    ]
    | [name: ComputedExpression | PropertyName, ...comments: Comments]

  /**
   * Boolean indicating if field name is computed.
   */
  computed: boolean

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode FieldDefinitionData}
   */
  data?: FieldDefinitionData | undefined

  /**
   * Boolean indicating if field is a static class field.
   */
  static: boolean

  /**
   * Node type.
   */
  type: 'fieldDefinition'
}

export type { FieldDefinition as default, FieldDefinitionData }
