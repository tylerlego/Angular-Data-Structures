export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(n: number) {
      this.value = n;
      this.left = null;
      this.right = null;
    }
  }