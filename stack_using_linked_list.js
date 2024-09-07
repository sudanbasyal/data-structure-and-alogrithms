class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    let node = new Node(data);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
  }
  pop() {
    if (!this.top) {
      return "Stack is empty";
    }
    let popped_node = this.top;
    this.top = this.top.next;
    popped_node.next = null;
    return popped_node.data;
  }
  peek() {
    if (!this.top) {
      return "Stack is empty";
    } else {
      return this.top.data;
    }
  }
}

// Example usage:
const stack = new Stack();

stack.push(1); // Pushing 1 onto the stack
stack.push(2); // Pushing 2 onto the stack
stack.push(3); // Pushing 3 onto the stack
console.log(stack);
console.log(stack.peek()); // Peek the top element
console.log(stack.pop()); // Pop the top element
console.log(stack.pop()); // Pop the top element
console.log(stack.pop()); // Pop the top element
console.log(stack.peek());
