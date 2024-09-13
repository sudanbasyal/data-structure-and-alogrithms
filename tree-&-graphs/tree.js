class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }
}

const node1 = new TreeNode(2, new TreeNode(4), new TreeNode(5));
const node2 = new TreeNode(3);
const root = new TreeNode(1, node1, node2);

console.log(root);
