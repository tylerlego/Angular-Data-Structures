import { Node } from '../common/node'

export class BinarySearchTree {
    root: Node | null;
    
    constructor() {
      this.root = null;
    }
  
    insert(n: number) {
      const node = new Node(n);
  
      if (!this.root) {
        this.root = node;
      } else {
        let curr = this.root;
  
        while (true) {
          if (n < curr.value) {
            if (!curr.left) {
              curr.left = node;
              return this;
            }
            curr = curr.left;
          } else {
            if (!curr.right) {
              curr.right = node;
              return this;
            }
            curr = curr.right;
          }
        }
      }
      return null;
    }
  
    lookup(n: number) {
      if (!this.root) {
        return null;
      }
      let curr: Node | null = this.root;
  
      while (curr) {
        if (n === curr.value) {
          return curr;
        }
        if (n < curr.value) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      return null;
    }
  }
  