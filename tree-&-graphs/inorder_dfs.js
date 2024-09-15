class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current_node = this.root;
      while (true) {
        if (data < current_node.data) {
          if (current_node.leftChild === null) {
            current_node.leftChild = newNode;
            return;
          } else {
            current_node = current_node.leftChild;
          }
        } else if (data > current_node.data) {
          if (current_node.rightChild === null) {
            current_node.rightChild = newNode;
            return;
          } else {
            current_node = current_node.rightChild;
          }
        } else {
          return;
        }
      }
    }
  }
  inorderDFS(node = this.root) {
    if (node) {
      this.inorderDFS(node.leftChild); // Traverse the left subtree
      console.log(node.data); // Visit the current node (root)
      this.inorderDFS(node.rightChild); // Traverse the right subtree
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);
bst.insert(12);
bst.insert(14);
bst.insert(16);
bst.insert(18);

console.log(bst);

bst.inorderDFS();
