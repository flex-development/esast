/**
 * @file Nodes - ImportMeta
 * @module esast/nodes/ImportMeta
 */

import type {
  Comment,
  Comments,
  Data,
  ImportIdentifier,
  MetaIdentifier,
  Parent
} from '@flex-development/esast'

/**
 * Info associated with `import.meta` meta-properties.
 *
 * @see {@linkcode Data}
 *
 * @extends {Data}
 */
interface ImportMetaData extends Data {}

/**
 * The `import.meta` meta-property.
 *
 * @see {@linkcode Parent}
 *
 * @extends {Parent}
 */
interface ImportMeta extends Parent {
  /**
   * List of children.
   *
   * @see {@linkcode Comment}
   * @see {@linkcode ImportIdentifier}
   * @see {@linkcode MetaIdentifier}
   */
  children: [
    import: ImportIdentifier,
    ...comments: Comments,
    meta: MetaIdentifier
  ]

  /**
   * Info from the ecosystem.
   *
   * @see {@linkcode ImportMetaData}
   */
  data?: ImportMetaData | undefined

  /**
   * Node type.
   */
  type: 'importMeta'
}

export type { ImportMetaData, ImportMeta as default }
