class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left_child = left;
    this.right_child = right;
  }
}

class ExpressionTree {
  constructor() {
    this.root = null;
  }

  // Manually build the expression tree
  buildExpressionTree() {
    // Construct the leaf nodes
    let A = new TreeNode("A");
    let B = new TreeNode("B");
    let C = new TreeNode("C");
    let D = new TreeNode("D");
    let E = new TreeNode("E");
    let F = new TreeNode("F");
    let G = new TreeNode("G");

    // Internal nodes
    let plus1 = new TreeNode("+", A, B); // (A + B)
    let minus1 = new TreeNode("-", D, E); // (D - E)
    let plus2 = new TreeNode("+", F, G); // (F + G)

    let mult1 = new TreeNode("*", plus1, C); // (A + B) * C
    let mult2 = new TreeNode("*", minus1, plus2); // (D - E) * (F + G)

    // Root node (final subtraction)
    this.root = new TreeNode("-", mult1, mult2); // (A + B) * C - (D - E) * (F + G)
  }

  // Pre-order DFS traversal (prefix)
  preorderDFS(node = this.root) {
    if (node) {
      console.log(node.data); // Visit the node
      this.preorderDFS(node.left_child); // Traverse the left subtree
      this.preorderDFS(node.right_child); // Traverse the right subtree
    }
  }

  // Post-order DFS traversal (postfix)
  postorderDFS(node = this.root) {
    if (node) {
      this.postorderDFS(node.left_child); // Traverse the left subtree
      this.postorderDFS(node.right_child); // Traverse the right subtree
      console.log(node.data); // Visit the node
    }
  }
  inorderDFS(node = this.root) {
    if (node) {
      this.inorderDFS(node.left_child); // Traverse the left subtree
      console.log(node.data); // Visit the node
      this.inorderDFS(node.right_child); // Traverse the right subtree
    }
  }
}

// Create the expression tree
let exprTree = new ExpressionTree();
exprTree.buildExpressionTree();
console.log(exprTree);
console.log("Pre-order DFS (Prefix):");
exprTree.preorderDFS(); // Output should be in prefix notation

console.log("Post-order DFS (Postfix):");
exprTree.postorderDFS(); // Output should be in postfix notation

console.log("In-order DFS (Infix):");
exprTree.inorderDFS(); // Output should be in infix notation
