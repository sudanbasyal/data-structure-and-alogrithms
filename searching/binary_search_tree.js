class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left_child = left;
    this.right_child = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current_node = this.root;
      while (true) {
        if (data < current_node.data) {
          if (current_node.left_child === null) {
            current_node.left_child = newNode;
            break;
          } else {
            current_node = current_node.left_child;
          }
        } else if (data > current_node.data) {
          if (current_node.right_child === null) {
            current_node.right_child = newNode;
            break;
          } else {
            current_node = current_node.right_child;
          }
        } else {
          break;
        }
      }
    }
  }
  search(data) {
    let current_node = this.root;
    while (current_node) {
      if (current_node.data === data) {
        return true;
      } else if (data < current_node.data) {
        current_node = current_node.left_child;
      } else {
        current_node = current_node.right_child;
      }
    }
    return false;
  }
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }
  deleteNode(node, data) {
    if (node === null) {
      return null;
    }

    // Search for the node to be deleted
    if (data < node.data) {
      node.left_child = this.deleteNode(node.left_child, data); // Correctly assign the updated left child
    } else if (data > node.data) {
      node.right_child = this.deleteNode(node.right_child, data); // Correctly assign the updated right child
    } else {
      // Node found
      if (node.left_child === null && node.right_child === null) {
        return null; // Case 1: No children (leaf node)
      } else if (node.left_child === null) {
        return node.right_child; // Case 2: One child (right)
      } else if (node.right_child === null) {
        return node.left_child; // Case 2: One child (left)
      } else {
        // Case 3: Two children
        const successor = this.findSuccessor(node.right_child); // Find the successor
        node.data = successor.data; // Replace data with successor's data
        node.right_child = this.deleteNode(node.right_child, successor.data); // Delete the successor
      }
    }
    return node; // Return the updated node
  }

  findSuccessor(node) {
    let current_node = node;
    while (current_node.left_child) {
      current_node = current_node.left_child;
    }
    return current_node;
  }
  minValueOfTree() {
    let current = this.root;

    while (current.left_child) {
      current = current.left_child;
    }
    return current.data;
  }
}

// usage of the binary search tree

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

console.log(bst.search(13)); // true
console.log(bst.search(11)); // false

bst.delete(13);
console.log(bst.search(13)); // false
console.log(bst);
console.log("minimum_value", bst.minValueOfTree()); // 3

bst.delete(15);
console.log(bst);
