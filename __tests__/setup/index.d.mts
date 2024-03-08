declare module '@flex-development/esast' {
  const LITERAL: unique symbol
  const NODE: unique symbol
  const PARENT: unique symbol

  interface Literal {
    literal: typeof LITERAL
  }

  interface Node {
    node: typeof NODE
  }

  interface Parent {
    parent: typeof PARENT
  }

  export { NODE }
}

export {}
