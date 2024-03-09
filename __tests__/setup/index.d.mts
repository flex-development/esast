declare module '@flex-development/esast' {
  const DATA: unique symbol
  const LITERAL: unique symbol
  const NODE: unique symbol
  const PARENT: unique symbol

  export interface Data {
    data: typeof DATA
  }

  export interface Literal {
    literal: typeof LITERAL
  }

  export interface Node {
    node: typeof NODE
  }

  export interface Parent {
    parent: typeof PARENT
  }

  export { DATA, LITERAL, NODE, PARENT }
}

declare module '@flex-development/docast' {
  interface Data {
    data: typeof import('@flex-development/esast').DATA
  }

  interface Node {
    node: typeof import('@flex-development/esast').NODE
  }

  interface Parent {
    parent: typeof import('@flex-development/esast').PARENT
  }
}

declare module 'mdast' {
  interface Data {
    data: typeof import('@flex-development/esast').DATA
  }

  interface Node {
    node: typeof import('@flex-development/esast').NODE
  }

  interface Parent {
    parent: typeof import('@flex-development/esast').PARENT
  }
}

export {}
