import { Component, OnInit } from '@angular/core';
import { Node } from '../common/node';
import { BinarySearchTree } from '../common/binary-search-tree';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  constructor() { }
  content = {
    res: '',
    lookup: ''
  };
  lookupNum = 1;

  traverse(node: Node | null) {
    if (node) {
      const tree: any = { value: node.value };
      tree.left = node.left === null ? null : this.traverse(node.left);
      tree.right = node.right === null ? null : this.traverse(node.right);
      return tree;
    }
  }

  ngOnInit(): void {
    // TEST BLOCK

    /* Create and populate BST */
    let tree = new BinarySearchTree();
    tree.insert(9);
    tree.insert(4);
    tree.insert(6);
    tree.insert(20);
    tree.insert(1);
    tree.insert(170);
    tree.insert(15);

    /* Create JSON representation of BST */
    const res = this.traverse(tree.root);
    this.content.res = JSON.stringify(res);

    /* Create lookup string */
    this.content.lookup = JSON.stringify(tree.lookup(this.lookupNum));

    // END TEST BLOCK
  }
}
