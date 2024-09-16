class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  bfs() {
    const visitedNodes = [];
    if (!this.root) return visitedNodes;
    const bfsQueue = [];
    bfsQueue.push(this.root);
    while (bfsQueue.length > 0) {
      const currentNode = bfsQueue.shift();
      visitedNodes.push(currentNode.data);
      if (currentNode.leftChild) bfsQueue.push(currentNode.leftChild);
      if (currentNode.rightChild) bfsQueue.push(currentNode.rightChild);
    }
    return visitedNodes;
  }
}
const bst = new BST();
bst.root = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

console.log(bst.bfs()); // Output: [4, 2, 7, 1, 3, 6, 9]
