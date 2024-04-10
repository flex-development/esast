/**
 * @file Content - Content
 * @module esast/content/Content
 */

import type { Expression, Pattern, RootChild } from '@flex-development/esast'

/**
 * Union of registered content model nodes.
 */
type Content = Expression | Pattern | RootChild

export type { Content as default }
