/**
 * @file Nodes - ModifierList
 * @module esast/nodes/ModifierList
 */

import type {
  Comment,
  Data,
  Modifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with modifier lists.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ModifierListData extends Data {}

/**
 * A modifier list.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ModifierList extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode Modifier}
   */
  children:
    | [first: Modifier, ...middle: (Comment | Modifier)[], last: Modifier]
    | [first: Modifier]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ModifierListData}
   */
  data?: ModifierListData | undefined

  /**
   * Node type.
   */
  type: 'modifierList'
}

export type { ModifierList as default, ModifierListData }
