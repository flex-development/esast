/**
 * @file Nodes - ImportExpression
 * @module esast/nodes/ImportExpression
 */

import type {
  ArgumentList,
  Comments,
  Data,
  ImportIdentifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `import` expressions.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportExpressionData extends Data {}

/**
 * An `import` expression.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportExpression extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode ArgumentList}
   * @see {@linkcode Comments}
   * @see {@linkcode ImportIdentifier}
   */
  children: [
    callee: ImportIdentifier,
    ...comments: Comments,
    arguments: ArgumentList
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportExpressionData}
   */
  data?: ImportExpressionData | undefined

  /**
   * Node type.
   */
  type: 'importExpression'
}

export type { ImportExpressionData, ImportExpression as default }
